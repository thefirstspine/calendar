import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '@thefirstspine/auth';
import { AppService } from './app.service';
import { IndexController } from './index/index.controller';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { EventsModule } from './events/events.module';
import { Event } from './events/event.entity';
import { Cycle } from './cycles/cycle.entity';
import { CyclesModule } from './cycles/cycles.module';
import { ScheduledLoot } from './scheduled-loots/scheduled-loot.entity';
import { ScheduledLootsModule } from './scheduled-loots/scheduled-loot.module';
import { ScheduledLootUser } from './scheduled-loots/scheduled-loot-user.entity';

@Module({
  controllers: [IndexController, EventsController],
  providers: [AppService, AuthService, EventsService, AuthService],
})
export class AppModule {
  static register(): DynamicModule {
    return {
      module: AppModule,
      imports: [
        EventsModule,
        CyclesModule,
        ScheduledLootsModule,
        TypeOrmModule.forFeature([Event, Cycle, ScheduledLoot, ScheduledLootUser]),
        TypeOrmModule.forRoot({
          type: 'postgres',
          synchronize: true,
          entities: [__dirname + '/**/**.entity{.ts,.js}'],
          host: process.env.PG_HOST,
          port: parseInt(process.env.PG_PORT, 10),
          username: process.env.PG_USERNAME,
          password: process.env.PG_PASSWORD,
          database: process.env.PG_DATABASE,
        }),
      ],
    };
  }
}
