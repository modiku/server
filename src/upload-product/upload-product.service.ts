import { Injectable } from '@nestjs/common';
import { CreateUploadProductDto } from './dto/create-upload-product.dto';
import { UpdateUploadProductDto } from './dto/update-upload-product.dto';

@Injectable()
export class UploadProductService {
  create(createUploadProductDto: CreateUploadProductDto) {
    return 'This action adds a new uploadProduct';
  }

  findAll() {
    return `This action returns all uploadProduct`;
  }

  findOne(id: number) {
    return `This action returns a #${id} uploadProduct`;
  }

  update(id: number, updateUploadProductDto: UpdateUploadProductDto) {
    return `This action updates a #${id} uploadProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} uploadProduct`;
  }
}
