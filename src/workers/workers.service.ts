import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class WorkersService {

  constructor(private readonly databaseService:DatabaseService) {}

  async create(createWorkerDto: CreateWorkerDto) {
    return this.databaseService.worker.create({
      data: createWorkerDto
    });
  }

  async findAll() {
    return this.databaseService.worker.findMany();
  }

  async findOne(id: number) {

    // if(id !== ){
    //   return `This ${id}`;
    // }else{
    //   return this.databaseService.worker.findUnique({
    //     where: { id },
    //   });
    // }

    // return this.databaseService.worker.findUnique({
    //   where: { id },
    // });

    
  }

  async update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return this.databaseService.worker.update({
      where: { id },
      data: updateWorkerDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.worker.delete({
      where: { id },
    });
  }
}
