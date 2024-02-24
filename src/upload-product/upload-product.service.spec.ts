import { Test, TestingModule } from '@nestjs/testing';
import { UploadProductService } from './upload-product.service';

describe('UploadProductService', () => {
  let service: UploadProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadProductService],
    }).compile();

    service = module.get<UploadProductService>(UploadProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
