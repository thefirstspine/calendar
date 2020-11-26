import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { LessThan, MoreThan } from "typeorm";

import { Cycle } from "./cycle.entity";

@Injectable()
export class CyclesService extends TypeOrmCrudService<Cycle> {

  constructor(@InjectRepository(Cycle) repo) {
    super(repo);
  }

  async current(): Promise<Cycle> {
    return await this.repo.findOne({
      where: {
        datetimeFrom: LessThan(new Date().toISOString()),
        datetimeTo: MoreThan(new Date().toISOString()),
      }
    })
  }

}
