import configuration from './src/config/configuration';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AuthService } from './src/services/auth.service';
import { AuthController } from './src/controllers/auth.controller';
import { JwtStrategy } from './src/strategy/jwt.strategy';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://Yatsa-dev:intelcorei78@cluster0.1izmw.mongodb.net/?retryWrites=true&w=majority',
    ),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('jwt.secret'),
        signOptions: { expiresIn: configService.get<string>('jwt.expiresIn') },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ConfigService, JwtStrategy],
})
export class AppModule {}
