import { Test, TestingModule } from '@nestjs/testing';
import { CategogyService } from './categogy.service';

describe('CategogyService', () => {
  let service: CategogyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategogyService],
    }).compile();

    service = module.get<CategogyService>(CategogyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
