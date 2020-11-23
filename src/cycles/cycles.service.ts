import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

import { Cycle } from "./cycle.entity";

@Injectable()
export class CyclesService extends TypeOrmCrudService<Cycle> {
  constructor(@InjectRepository(Cycle) repo) {
    super(repo);
  }
}
