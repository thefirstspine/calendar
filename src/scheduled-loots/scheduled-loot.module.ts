import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '@thefirstspine/auth';
import { ScheduledLoot } from './scheduled-loot.entity';
import { ScheduledLootsController } from './scheduled-loot.controller';
import { ScheduledLootsService } from './scheduled-loot.service';
import { ScheduledLootUser } from './scheduled-loot-user.entity';
import { ArenaService } from '../arena/arena.service';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduledLoot, ScheduledLootUser])],
  providers: [ScheduledLootsService, AuthService, ArenaService],
  exports: [ScheduledLootsService],
  controllers: [ScheduledLootsController],
})
export class ScheduledLootsModule {}
