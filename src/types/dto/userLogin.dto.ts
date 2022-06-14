import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class adminLoginDTO {
  @IsEmail()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class adminResponseDTO {
  token: string;
}
