import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { adminResponseDTO } from 'src/types/dto/userLogin.dto';

import { AuthService } from './../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('signin')
  async login(adminName: any, adminPassword: any): Promise<adminResponseDTO> {
    const token = await this.authService.login(adminName, adminPassword);
    return token;
  }
}
