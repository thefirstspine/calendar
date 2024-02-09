import { Controller, Get, UseGuards } from "@nestjs/common";

import { Event } from "./event.entity";
import { EventsService } from "./events.service";

@Controller("events")
export class EventsController {
  constructor(public service: EventsService) {}

  @Get()
  index(): Promise<Event[]> {
    return this.service.getAll();
  }

  @Get('/next')
  next(): Promise<Event[]> {
    return this.service.getNext();
  }
}
