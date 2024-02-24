import { PartialType } from '@nestjs/swagger';
import { CreateUploadProductDto } from './create-upload-product.dto';

export class UpdateUploadProductDto extends PartialType(CreateUploadProductDto) {}
