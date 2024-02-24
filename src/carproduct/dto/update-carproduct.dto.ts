import { PartialType } from '@nestjs/swagger';
import { CreateCarproductDto } from './create-carproduct.dto';

export class UpdateCarproductDto extends PartialType(CreateCarproductDto) {}
