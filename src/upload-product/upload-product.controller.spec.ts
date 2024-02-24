import { Test, TestingModule } from '@nestjs/testing';
import { UploadProductController } from './upload-product.controller';
import { UploadProductService } from './upload-product.service';

describe('UploadProductController', () => {
  let controller: UploadProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadProductController],
      providers: [UploadProductService],
    }).compile();

    controller = module.get<UploadProductController>(UploadProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
