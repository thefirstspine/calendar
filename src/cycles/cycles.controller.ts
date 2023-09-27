import { Controller, Get } from "@nestjs/common";
import { CyclesService } from "./cycles.service";


@Controller("cycles")
export class CyclesController {
  constructor(public service: CyclesService) {}

  @Get()
  async index() {
    return this.service.getAll();
  }

  @Get('current')
  async current() {
    return this.service.current();
  }

}
