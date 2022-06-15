import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDTO } from 'src/types/dto/users.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: UserDTO) {
    const newUser = new this.userModel({ ...user });
    return await newUser.save();
  }

  async getUserById(currentUserId: string) {
    let user: UserDTO;
    try {
      user = await this.userModel.findById(currentUserId);
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }

  async update(currentUserId: string, user: UserDTO) {
    await this.userModel.findByIdAndUpdate(currentUserId, user);
    return user;
  }

  async getUsers() {
    return await this.userModel.find();
  }
}
