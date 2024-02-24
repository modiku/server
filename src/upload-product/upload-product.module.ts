import { Module } from '@nestjs/common';
import { UploadProductService } from './upload-product.service';
import { UploadProductController } from './upload-product.controller';

@Module({
  controllers: [UploadProductController],
  providers: [UploadProductService],
})
export class UploadProductModule {}
