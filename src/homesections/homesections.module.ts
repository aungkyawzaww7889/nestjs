import { Module } from '@nestjs/common';
import { HomesectionsService } from './homesections.service';
import { HomesectionsController } from './homesections.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [HomesectionsController],
  providers: [HomesectionsService],
})
export class HomesectionsModule {}
