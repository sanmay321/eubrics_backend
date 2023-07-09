import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammingService } from './programming.service';

describe('ProgrammingService', () => {
  let service: ProgrammingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgrammingService],
    }).compile();

    service = module.get<ProgrammingService>(ProgrammingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
