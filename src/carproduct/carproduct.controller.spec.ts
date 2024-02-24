import { Test, TestingModule } from '@nestjs/testing';
import { CarproductController } from './carproduct.controller';
import { CarproductService } from './carproduct.service';

describe('CarproductController', () => {
  let controller: CarproductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarproductController],
      providers: [CarproductService],
    }).compile();

    controller = module.get<CarproductController>(CarproductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
