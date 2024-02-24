import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UploadProductService } from './upload-product.service';
import { CreateUploadProductDto } from './dto/create-upload-product.dto';
import { UpdateUploadProductDto } from './dto/update-upload-product.dto';

@Controller('upload-product')
export class UploadProductController {
  constructor(private readonly uploadProductService: UploadProductService) {}

  @Post()
  create(@Body() createUploadProductDto: CreateUploadProductDto) {
    return this.uploadProductService.create(createUploadProductDto);
  }

  @Get()
  findAll() {
    return this.uploadProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.uploadProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUploadProductDto: UpdateUploadProductDto) {
    return this.uploadProductService.update(+id, updateUploadProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.uploadProductService.remove(+id);
  }
}
