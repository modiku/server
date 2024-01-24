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
  @ApiOperation({summary:"创建一个用户对象",description:""})
  @ApiParam({name:"userObj",description:"一个用户对象",required:true})
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto)
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

  @Patch(':number')
  @ApiOperation({summary:"更新用户数据",description:""})
  @ApiParam({name:"number",description:"用户账号",required:true})
  update(@Param('number') number: string, @Body() updateUserDto: UpdateUserDto) {
    // console.log(updateUserDto)
    return this.userService.update(number, updateUserDto);
    // return true;
  }

  @Delete(':number')
  @ApiOperation({summary:"删除用户数据",description:""})
  @ApiParam({name:"number",description:"用户账号",required:true})
  remove(@Param('number') number: string) {
    return this.userService.remove(number);
  }
}
