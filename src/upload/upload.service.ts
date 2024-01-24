import { Injectable } from '@nestjs/common';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
const baseAvaterUrl = 'http://localhost:3000/static/userAvater/'

@Injectable()
export class UploadService {
  uploadAvater(file:Express.Multer.File, userdto:any){
    // console.log()

    return {
      message:file.filename
    }
  }


}
