import { Test, TestingModule } from '@nestjs/testing';
import { CarproductService } from './carproduct.service';

describe('CarproductService', () => {
  let service: CarproductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarproductService],
    }).compile();

    service = module.get<CarproductService>(CarproductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
