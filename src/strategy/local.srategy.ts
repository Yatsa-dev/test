import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from 'src/auth/auth.service';
// import isUserLoginDataValid from 'src/services/validator.servise';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'name' });
  }

  // async validate(name: string, password: string): Promise<any> {
  //   let UserWihtoutPass;

  //   if (!isUserLoginDataValid(name, password)) {
  //     throw new BadRequestException('Incorrect name or password');
  //   }
  //   try {
  //     UserWihtoutPass = await this.authService.validateUser({
  //       name,
  //       password,
  //     });
  //   } catch (error) {
  //     throw new BadRequestException('Incorrect name or password');
  //   }

  //   return UserWihtoutPass;
  // }
}
