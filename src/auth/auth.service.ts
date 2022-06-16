import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login = async (): Promise<object> => {
    const name = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;
    const payload = { name, password };
    return {
      token: this.jwtService.sign(payload),
    };
  };
}
