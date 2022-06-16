import { IsEmail, IsNotEmpty } from 'class-validator';

export class ClientDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  lastName: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  phone: number;
}
