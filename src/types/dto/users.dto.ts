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

export class UserDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
}
