import { Test, TestingModule } from '@nestjs/testing';
import { CategogyController } from './categogy.controller';
import { CategogyService } from './categogy.service';

describe('CategogyController', () => {
  let controller: CategogyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategogyController],
      providers: [CategogyService],
    }).compile();

    controller = module.get<CategogyController>(CategogyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
