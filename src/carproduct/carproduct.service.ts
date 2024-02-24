import { Injectable } from '@nestjs/common';
import { CreateCarproductDto } from './dto/create-carproduct.dto';
import { UpdateCarproductDto } from './dto/update-carproduct.dto';
import { Carproduct } from './entities/carproduct.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/order/entities/order.entity';

@Injectable()
export class CarproductService {
  constructor(@InjectRepository(Carproduct) private readonly carproduct:Repository<Carproduct>){}

  create(createCarproductDto: CreateCarproductDto) {
    const data = new Carproduct()
    data.num = createCarproductDto.num
    data.price = createCarproductDto.price
    data.product = createCarproductDto.product
    data.order = createCarproductDto.order
    this.carproduct.save(data)    


    return {
      message: '添加成功'
    }
  }

  findAll() {
    return this.carproduct.find({
      relations:["product","order"]
    });
  }

  findOne(id: string) {
    return this.carproduct.find({
      relations:["product","order"],
      where:{
        id:id
      }
    });
  }

  update(id: number, updateCarproductDto: UpdateCarproductDto) {
    return `This action updates a #${id} carproduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} carproduct`;
  }

  removeByorderid(orderId: string){
    const newOredr = new Order()
    newOredr.id = orderId
    this.carproduct.createQueryBuilder().delete().where("orderId = :id", {id : orderId}).execute()
  }
}
