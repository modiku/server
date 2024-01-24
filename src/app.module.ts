import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './common/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
@Module({
  imports: [UserModule,DatabaseModule, UploadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
