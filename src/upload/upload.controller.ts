import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { ApiOperation, ApiTags } from '@nestjs/swagger';



@Controller('upload')
@ApiTags('上传用户头像接口')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post('user/img')
  @ApiOperation({ summary: "上传用户头像，到本地", description: "上传位置: C:/Users/10420/Desktop/final_work_note/images/userAvater" })
  @UseInterceptors(FileInterceptor('file', {
    dest: "C:/Users/10420/Desktop/final_work_note/images/userAvater",
  }))
  uploadAvater(@UploadedFile() file: Express.Multer.File, @Body() userdto) {
    console.log(file)
    return this.uploadService.uploadAvater(file, userdto)
  }

  @Post('product/bigimg')
  @ApiOperation({ summary: "上传用户头像，到本地", description: "上传位置: C:/Users/10420/Desktop/final_work_note/images/product/bigImg" })
  @UseInterceptors(FileInterceptor('file', {
    dest: "C:/Users/10420/Desktop/final_work_note/images/product/bigImg",
  }))
  uploadBigImg(@UploadedFile() file: Express.Multer.File, @Body() productdto) {
    // console.log(file)
    // return true
    return this.uploadService.uploadBigImg(file, productdto)
  }

  @Post('product/carimg')
  @ApiOperation({ summary: "上传用户头像，到本地", description: "上传位置: C:/Users/10420/Desktop/final_work_note/images/product/carImgs" })
  @UseInterceptors(FileInterceptor('file', {
    dest: "C:/Users/10420/Desktop/final_work_note/images/product/carImgs",
  }))
  uploadCarImg(@UploadedFile() file: Express.Multer.File, @Body() productCardto) {
    // console.log(files)
    // return true

    return this.uploadService.uploadCarImg(file, productCardto)
  }

  @Post('product/customization')
  @ApiOperation({ summary: "上传个性化定制图像 包括素材和最终成品，到本地", description: "上传位置: C:/Users/10420/Desktop/final_work_note/images/product/carImgs" })
  @UseInterceptors(FileInterceptor('file', {
    dest: "C:/Users/10420/Desktop/final_work_note/images/product/customization",
  }))
  uploadCustomization(@UploadedFile() file: Express.Multer.File, @Body() productCardto) {
    // console.log(files)
    // return true

    return this.uploadService.uploadCustomization(file)
  }

}


