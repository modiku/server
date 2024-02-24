import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({summary:"创建一个订单",description:""})
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get('all')
  findAll() {
    return this.orderService.findAll();
  }

  @Get()
  findOne(@Query('id') id: string) {
    return this.orderService.findOne(id);
  }

  @Get('user')
  findByUser(@Query('userid') userid:string){
    return this.orderService.findByUser(userid)
  }
  @Patch(':id')
  pay(@Param('id') id: string) {
    return this.orderService.pay(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderService.remove(id);
  }
}
