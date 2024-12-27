import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { HomesectionsService } from './homesections.service';
import { CreateHomesectionDto } from './dto/create-homesection.dto';
import { UpdateHomesectionDto } from './dto/update-homesection.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('homesections')
export class HomesectionsController {
  constructor(private readonly homesectionsService: HomesectionsService) {}

  // @Get()
  // findAll() {
  //   return this.homesectionsService.findAll();
  // }

  @Get()
  async findLatest() {
    const homesection = await this.homesectionsService.findAll();
    return {
      status: 200,
      data: homesection,
    };
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './upload/homesection',
        filename: (req, file, callback) => {
          const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
          callback(null, uniqueName);
        },
      }),
    }),
  )
  async create(@Body() createHomesectionDto: CreateHomesectionDto, @UploadedFile() image: Express.Multer.File) {
    if (!image) {
      throw new HttpException('Image is required ', HttpStatus.BAD_REQUEST);
    }
    createHomesectionDto.image = `/upload/homesection/${image.filename}`;
    // console.log(createHomesectionDto.image);
    await this.homesectionsService.create(createHomesectionDto);
    return {
      status: 200,
      message: 'Homesection created successfully',
    };
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.homesectionsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHomesectionDto: UpdateHomesectionDto) {
  //   return this.homesectionsService.update(+id, updateHomesectionDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.homesectionsService.remove(+id);
  // }
}
