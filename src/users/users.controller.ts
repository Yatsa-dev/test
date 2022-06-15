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
// import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { UserDTO } from 'src/types/dto/users.dto';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('signup')
  @UsePipes(new ValidationPipe())
  async register(@Body() body: UserDTO): Promise<object> {
    const user = await this.userService.create(body);
    return user;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(@Param('id') currentUserId: string, @Body() body: UserDTO) {
    return await this.userService.update(currentUserId, body);
  }

  @Get(':id')
  async getUserById(@Param('id') currentUserId: string) {
    return await this.userService.getUserById(currentUserId);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers(): Promise<object> {
    return await this.userService.getUsers();
  }
}
