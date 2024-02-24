import { Module } from '@nestjs/common';
import { CarproductService } from './carproduct.service';
import { CarproductController } from './carproduct.controller';
import { Carproduct } from './entities/carproduct.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Carproduct])],
  controllers: [CarproductController],
  providers: [CarproductService],
  exports:[CarproductService]
})
export class CarproductModule {}
