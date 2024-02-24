import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarproductService } from 'src/carproduct/carproduct.service';
import { CarproductModule } from 'src/carproduct/carproduct.module';

@Module({
  imports: [CarproductModule,TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
