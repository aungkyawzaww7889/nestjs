import { PartialType } from '@nestjs/mapped-types';
import { CreateHomesectionDto } from './create-homesection.dto';

export class UpdateHomesectionDto extends PartialType(CreateHomesectionDto) {}
