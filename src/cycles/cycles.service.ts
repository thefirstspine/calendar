import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, MoreThan, Repository } from "typeorm";

import { Cycle } from "./cycle.entity";

@Injectable()
export class CyclesService {

  constructor(@InjectRepository(Cycle) private readonly repo: Repository<Cycle>) {}

  async current(): Promise<Cycle> {
    return await this.repo.findOne({
      where: {
        datetimeFrom: LessThan(new Date()),
        datetimeTo: MoreThan(new Date()),
      }
    })
  }

  public getAll(): Promise<Cycle[]> {
    return this.repo.find();
  }

}
