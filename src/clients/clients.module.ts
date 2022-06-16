import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientShema } from './client.model';
import { ClientController } from './clients.controller';
import { ClientService } from './clients.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Client', schema: ClientShema }]),
  ],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
