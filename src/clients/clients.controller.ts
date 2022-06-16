import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ClientDTO } from 'src/types/dto/clients.dto';
import { ClientService } from './clients.service';

@Controller('clients')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post('signup')
  @UsePipes(new ValidationPipe())
  async register(@Body() body: ClientDTO): Promise<object> {
    const user = await this.clientService.create(body);
    return { user: user.id };
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') currentUserId: string,
    @Body() body: ClientDTO,
  ) {
    return await this.clientService.update(currentUserId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') currentUserId: string) {
    return await this.clientService.getUserById(currentUserId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers(): Promise<object> {
    return await this.clientService.getUsers();
  }
}
