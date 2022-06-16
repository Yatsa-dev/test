import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientDTO } from 'src/types/dto/clients.dto';
import { Client } from './client.model';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<Client>,
  ) {}

  async create(client: ClientDTO) {
    const newClient = new this.clientModel({ ...client });
    return await newClient.save();
  }

  async getUserById(currentUserId: string) {
    let client: ClientDTO;
    try {
      client = await this.clientModel.findById(currentUserId);
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    if (!client) {
      throw new NotFoundException('Could not find user.');
    }
    return client;
  }

  async update(currentUserId: string, client: ClientDTO) {
    await this.clientModel.findByIdAndUpdate(currentUserId, client);
    return client;
  }

  async getUsers() {
    return await this.clientModel.find();
  }
}
