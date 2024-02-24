import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository, getConnection, getRepository } from 'typeorm';
import { Carproduct } from 'src/carproduct/entities/carproduct.entity';
import { CarproductService } from 'src/carproduct/carproduct.service';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class OrderService {
 
  constructor(@InjectRepository(Order) private readonly order: Repository<Order>,private readonly carproductService: CarproductService) { }

  create(createOrderDto: CreateOrderDto) {
    const data = new Order();
    data.address = createOrderDto.address
    data.user = createOrderDto.user
    data.consigneeName = createOrderDto.consigneeName
    data.consigneePhoneNumber = createOrderDto.consigneePhoneNumber
    data.totalprice = createOrderDto.totalprice
    return this.order.save(data)
  }

  findAll() {
    return this.order.find({
      relations: ['carproducts', 'user']
    })
  }

  findOne(id: string) {
    return this.order.find({
      relations: ['carproducts', 'user'],
      where: {
        id: id
      }
    })
  }
  findByUser(userid: string) {
    const user = new User()
    user.number = userid
    return this.order.find({
      relations: ['carproducts', 'user'],
      where: {
        user:user
      }
    })
  }

  pay(id: string) {
    const data = new Order()
    data.pay = true
    this.order.update(id, data)


    return {
      message: '支付成功'
    };
  }
  remove(id: string) {
    const neworder = new Order()
    neworder.id = id
    this.carproductService.removeByorderid(id)
    this.order.delete(id)
    return {
      message:'删除订单成功'
    }
  }
}
