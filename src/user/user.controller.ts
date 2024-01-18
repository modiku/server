import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
@Controller('user')
@ApiTags('用户接口')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('all')
  @ApiOperation({summary:"返回数据库中的所有用户",description:""})
  findAll() {
    return this.userService.findAll();
  }

  @Get()
  @ApiOperation({summary:"根据提供的用户账号在数据库中查询",description:""})
  @ApiParam({name:"number",description:"用户账号",required:true})
  findOne(@Query('number') number: string) {
    return this.userService.findOne(number);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
