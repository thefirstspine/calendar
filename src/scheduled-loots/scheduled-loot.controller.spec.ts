import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledLootsController } from './scheduled-loot.controller';

describe('ScheduledLootsController', () => {
  let controller: ScheduledLootsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScheduledLootsController],
    }).compile();

    controller = module.get<ScheduledLootsController>(ScheduledLootsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
