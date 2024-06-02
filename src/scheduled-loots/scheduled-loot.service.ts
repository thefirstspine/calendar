import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { LessThan, MoreThan, Repository } from "typeorm";
import { ScheduledLootUser } from "./scheduled-loot-user.entity";

import { ScheduledLoot } from "./scheduled-loot.entity";

@Injectable()
export class ScheduledLootsService extends TypeOrmCrudService<ScheduledLoot> {

  constructor(
    @InjectRepository(ScheduledLoot) private readonly scheduledLootRepo: Repository<ScheduledLoot>,
    @InjectRepository(ScheduledLootUser) private readonly scheduledLootUserRepo: Repository<ScheduledLootUser>
  ) {
    super(scheduledLootRepo);
  }

  async current(): Promise<ScheduledLoot|undefined> {
    return this.scheduledLootRepo.findOne({
      where: {
        datetimeFrom: LessThan(new Date().toISOString()),
        datetimeTo: MoreThan(new Date().toISOString()),
      }
    })
  }

  async forUser(user: number, scheduledLootId: number): Promise<ScheduledLootUser|undefined> {
    return this.scheduledLootUserRepo.findOne({
      where: {
        user,
        scheduledLootId,
      }
    });
  }

  async registerForUser(user: number, scheduledLootId: number) {
    return this.scheduledLootUserRepo.save({
      user,
      scheduledLootId,
    });
  }

}
