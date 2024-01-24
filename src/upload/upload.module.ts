import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';

@Module({
  imports:[MulterModule.register({
    storage:diskStorage({
      destination:"C:/Users/10420/Desktop/final_work_note/images/userAvater",
      filename:(_,file,callback) => {
        const fileName = `${new Date().getTime() + file.originalname}`
        return callback(null,fileName)
      }
    })
  })],

  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
