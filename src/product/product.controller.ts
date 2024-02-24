import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({summary:"创建一个商品对象",description:""})
  @ApiParam({name:"productObj",description:"一个商品对象",required:true})
  create(@Body() createProductDto: CreateProductDto) {
    console.log(createProductDto)
    return this.productService.create(createProductDto);
  }

  @Get('all')
  @ApiOperation({summary:"返回数据库中的所有商品",description:""})
  findAll() {
    return this.productService.findAll();
  }


  @Get()
  @ApiOperation({summary:"搜索功能",description:""})
  @ApiParam({name:"keyWord",description:"搜索的关键字",required:false})
  findOne(@Query() query: { keyWord: string }) {
    return this.productService.search(query);
  }


  @Patch(':id')
  @ApiOperation({summary:"更新商品数据",description:""})
  @ApiParam({name:"id",description:"商品账号",required:true})
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    // console.log(updateproductDto)
    return this.productService.update(id, updateProductDto);
    // return true;
  }

  @Delete(':id')
  @ApiOperation({summary:"删除商品数据",description:""})
  @ApiParam({name:"id",description:"商品id",required:true})
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
