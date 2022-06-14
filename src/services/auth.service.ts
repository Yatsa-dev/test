import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { adminResponseDTO } from 'src/types/dto/userLogin.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login = async (adminName, adminPassword): Promise<adminResponseDTO> => {
    const payload = { adminName, adminPassword };
    return {
      token: this.jwtService.sign(payload),
    };
  };
}
