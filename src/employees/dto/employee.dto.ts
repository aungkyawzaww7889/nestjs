import { IsString, IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], {
    message: 'Valid role required',
  })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}

export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
