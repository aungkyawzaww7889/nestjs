import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private myUsersService: UsersService) {}

  @Get() //Get /users
  findAll(@Query('role') role?: 'ADMIN' | 'USER') {
    return this.myUsersService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.myUsersService.findOne(id);
  }

  // ValidationPipe is that use for validation which have DTO
  @Post()
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.myUsersService.create(createUserDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) updateUserDto: UpdateUserDto,
  ) {
    return this.myUsersService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.myUsersService.delete(id);
  }
}
