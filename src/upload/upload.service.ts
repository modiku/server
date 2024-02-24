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

  uploadBigImg(file:Express.Multer.File, productdto:any){
    return {
      message:file.filename
    }
  }

  uploadCarImg(file:Express.Multer.File,productCardto:any){


    return{
      message:file.filename
    }
  }

  uploadCustomization(file: Express.Multer.File) {
    return{
      message:file.filename
    }
  }


}
