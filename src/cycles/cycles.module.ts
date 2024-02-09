import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cycle } from './cycle.entity';
import { CyclesController } from './cycles.controller';
import { CyclesService } from './cycles.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cycle])],
  providers: [CyclesService],
  exports: [CyclesService],
  controllers: [CyclesController],
})
export class CyclesModule {}
