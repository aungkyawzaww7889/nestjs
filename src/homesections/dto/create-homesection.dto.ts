import { IsNotEmpty, IsString } from 'class-validator';

export class CreateHomesectionDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  image: string;
}

