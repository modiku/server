import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { ApiOperation, ApiTags } from '@nestjs/swagger';



@Controller('upload')
@ApiTags('上传用户头像接口')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('img')
  @ApiOperation({summary:"上传用户头像，到本地",description:"上传位置: C:/Users/10420/Desktop/final_work_note/images/userAvater"})
  @UseInterceptors(FileInterceptor('file'))
  uploadAvater(@UploadedFile() file:Express.Multer.File,@Body() userdto) {
    return this.uploadService.uploadAvater(file, userdto)
  }
}


