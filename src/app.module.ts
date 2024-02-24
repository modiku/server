import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
import { ProductModule } from './product/product.module';
import { UploadProductModule } from './upload-product/upload-product.module';
import { OrderModule } from './order/order.module';
import { CarproductModule } from './carproduct/carproduct.module';
@Module({
  imports: [UserModule,DatabaseModule, UploadModule, ProductModule, UploadProductModule, OrderModule, CarproductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
