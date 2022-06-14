import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/types/dto/users.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: UserDTO) {
    const newUser = new this.userModel({ ...user });
    const result = await newUser.save();
    return result;
  }

  async getUsers() {
    const result = await this.userModel.find();
    return result;
  }
}
