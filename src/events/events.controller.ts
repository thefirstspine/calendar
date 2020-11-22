import { Controller, UseGuards } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { AuthGuard } from "@thefirstspine/auth-nest";
import { AdminGuard } from "../admin.guard";

import { Event } from "./event.entity";
import { EventsService } from "./events.service";

@Crud({
  model: {
    type: Event,
  },
})
@Controller("events")
@UseGuards(AuthGuard, AdminGuard)
export class EventsController implements CrudController<Event> {
  constructor(public service: EventsService) {}
}
