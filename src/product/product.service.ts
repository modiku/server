import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly product: Repository<Product>) { }

  async create(createProducDto: CreateProductDto) {
    const data = new Product();
    data.name = createProducDto.name
    data.phone = createProducDto.phone
    data.price = createProducDto.price
    data.imgUrl = createProducDto.imgUrl
    data.CarouselImg1 = createProducDto.CarouselImg1
    data.CarouselImg2 = createProducDto.CarouselImg2
    data.CarouselImg3 = createProducDto.CarouselImg3
    data.description = createProducDto.description
    data.isShow = createProducDto?.isShow
    await this.product.save(data)
    // console.log(data.id)
    return {
      message: '商品创建成功',
      productId: data.id
    }
  }

  findAll() {
    return this.product.find({
      order: {
        date: 'DESC'
      }
    })
  }

  findOne(id: string) {
    if (id == '') {
      return {
        message: 'id不能为空'
      }
    } else {
      return this.product.find({
        where: {
          id: id
        }
      });
    }

  }

  search(query: { keyWord: string }) {
    // console.log(query,'==',query.keyWord,)
    return this.product.find({
      where: [{
        name: Like(`%${query.keyWord}%`),
        isShow:true
      }, {
        phone: Like(`%${query.keyWord}%`),
        isShow:true
      }],
      order: {
        date: 'DESC'
      }
    })
  }
  update(id: string, updateProducDto: UpdateProductDto) {
    // console.log(updateProducDto)
    const data = new Product()
    data.name = updateProducDto.name
    data.phone = updateProducDto.phone
    data.price = updateProducDto.price
    data.imgUrl = updateProducDto.imgUrl
    data.CarouselImg1 = updateProducDto.CarouselImg1
    data.CarouselImg2 = updateProducDto.CarouselImg2
    data.CarouselImg3 = updateProducDto.CarouselImg3
    data.description = updateProducDto.description

    // console.log(data)
    this.product.update(id, data)
    return {
      message: '修改商品数据成功'
    }

  }

  remove(id: string) {
    // console.log(id)

    this.product.delete(id);
    return {
      message: '删除商品成功'
    }
  }
}
