import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly user: Repository<User>) { }

  create(createUserDto: CreateUserDto) {
    const data = new User();
    data.number = createUserDto.number
    data.name = createUserDto.name
    data.password = createUserDto.password
    data.authority = createUserDto.authority
    this.user.save(data)
    return {
      message: '注册成功'
    }
  }

  findAll() {
    return this.user.find()
  }

  findOne(number: string) {
    if (number == '') {
      return {
        message: '账号不能为空'
      }
    } else {
      return this.user.find({
        where: {
          number: number
        }
      });
    }

  }

  update(number: string, updateUserDto: UpdateUserDto) {
    // console.log(updateUserDto)
    const data = new User()
    data.number = updateUserDto.number
    data.name = updateUserDto.name
    data.password = updateUserDto.password
    data.authority = updateUserDto.authority
    data.userAvaterUrl = updateUserDto.userAvaterUrl
    data.description = updateUserDto.description
    // console.log(data)
    this.user.update(number,data)
    return {
      message:'修改成功'
    }

  }

  remove(number: string) {
    // console.log(number)
    
    this.user.delete(number);
    return {
      message:'删除成功'
    }
  }
}
