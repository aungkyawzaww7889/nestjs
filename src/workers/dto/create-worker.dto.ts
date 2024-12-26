
import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class CreateWorkerDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string; 
}
