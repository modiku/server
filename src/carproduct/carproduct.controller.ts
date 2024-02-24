import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CarproductService } from './carproduct.service';
import { CreateCarproductDto } from './dto/create-carproduct.dto';
import { UpdateCarproductDto } from './dto/update-carproduct.dto';

@Controller('carproduct')
export class CarproductController {
  constructor(private readonly carproductService: CarproductService) {}

  @Post()
  create(@Body() createCarproductDto: CreateCarproductDto) {
    return this.carproductService.create(createCarproductDto);
  }

  // @Get()
  // findAll() {
  //   return this.carproductService.findAll();
  // }

  @Get()
  findOne(@Query('id') id: string) {
    return this.carproductService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarproductDto: UpdateCarproductDto) {
    return this.carproductService.update(+id, updateCarproductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carproductService.remove(+id);
  }
}
