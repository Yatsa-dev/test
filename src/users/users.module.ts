import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserShema } from './user.model';
import { UsersController } from './users.controller';
import { UserService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserShema }])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
