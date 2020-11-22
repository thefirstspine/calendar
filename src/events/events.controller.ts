import { Controller, UseGuards } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { AdminGuard } from "../admin.guard";

import { Event } from "./event.entity";
import { EventsService } from "./events.service";

@Crud({
  model: {
    type: Event,
  },
})
@Controller("events")
@UseGuards(AdminGuard)
export class EventsController implements CrudController<Event> {
  constructor(public service: EventsService) {}
}
