import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { adminResponseDTO } from 'src/types/dto/userLogin.dto';
import { UserDTO } from 'src/types/dto/users.dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post('login')
  async login(user: UserDTO): Promise<adminResponseDTO> {
    const token = await this.authService.login(user);
    return token;
  }
}
