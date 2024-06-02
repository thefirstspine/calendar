import { Controller, Get, UseGuards } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { AdminGuard } from "../admin.guard";

import { Cycle } from "./cycle.entity";
import { CyclesService } from "./cycles.service";

@Crud({
  model: {
    type: Cycle,
  },
})
@Controller("cycles")
@UseGuards(AdminGuard)
export class CyclesController implements CrudController<Cycle> {
  constructor(public service: CyclesService) {}

  @Get('current')
  async current() {
    return this.service.current();
  }

}
