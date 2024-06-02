import { Test, TestingModule } from '@nestjs/testing';
import { ScheduledLootsService } from './scheduled-loot.service';

describe('ScheduledLootsService', () => {
  let service: ScheduledLootsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScheduledLootsService],
    }).compile();

    service = module.get<ScheduledLootsService>(ScheduledLootsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
