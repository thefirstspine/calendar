import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { MoreThan, Repository } from "typeorm";

import { Event } from "./event.entity";

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private readonly repo: Repository<Event>) {}

  public getAll(): Promise<Event[]> {
    return this.repo.find();
  }

  public getNext(): Promise<Event[]> {
    return this.repo.find({
      where: {
        datetimeTo: MoreThan(new Date()),
      },
    });
  }

}
