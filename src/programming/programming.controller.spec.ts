import { Test, TestingModule } from '@nestjs/testing';
import { ProgrammingController } from './programming.controller';
import { ProgrammingService } from './programming.service';

describe('ProgrammingController', () => {
  let controller: ProgrammingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProgrammingController],
      providers: [ProgrammingService],
    }).compile();

    controller = module.get<ProgrammingController>(ProgrammingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
