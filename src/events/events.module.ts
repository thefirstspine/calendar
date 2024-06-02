import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '@thefirstspine/auth';
import { Event } from './event.entity';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  providers: [EventsService, AuthService],
  exports: [EventsService],
  controllers: [EventsController],
})
export class EventsModule {}
