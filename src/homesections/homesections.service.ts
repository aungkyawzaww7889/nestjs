import { DatabaseService } from 'src/database/database.service';
import { Injectable } from '@nestjs/common';
import { CreateHomesectionDto } from './dto/create-homesection.dto';
import { UpdateHomesectionDto } from './dto/update-homesection.dto';

@Injectable()
export class HomesectionsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.homeSection.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async create(createHomesectionDto: CreateHomesectionDto): Promise<object> {
    return this.databaseService.homeSection.create({
      data: createHomesectionDto,
    });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} homesection`;
  // }

  // update(id: number, updateHomesectionDto: UpdateHomesectionDto) {
  //   return `This action updates a #${id} homesection`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} homesection`;
  // }
}
