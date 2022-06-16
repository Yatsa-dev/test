import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { adminResponseDTO } from 'src/types/dto/userLogin.dto';

import { UserDTO } from 'src/types/dto/users.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login = async (_user: UserDTO): Promise<adminResponseDTO> => {
    // const { name, password } = this.admin;
    const name = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;
    const payload = { name, password };
    return {
      token: this.jwtService.sign(payload),
    };
  };

  // create = async (user): Promise<UserWihtoutPassDTO> => {
  //   const existingUser = await this.usersRepository.findOne(user.email);
  //   if (existingUser) {
  //     throw new BadRequestException('User exists');
  //   } else {
  //     const createdUser = await this.usersRepository.create(user);
  //     return createdUser;
  //   }
  // };

  // async validateUser(userFromRequest: userLoginDTO): Promise<object> {
  //   const user: User = await this.usersRepository.findOne(
  //     userFromRequest.email,
  //   );
  //   if (!user) {
  //     throw new BadRequestException('User does not exists');
  //   }
  //   const validatePass = bcrypt.compareSync(
  //     userFromRequest.password,
  //     user.password,
  //   );

  //   if (!validatePass) {
  //     throw new BadRequestException('Incorrect password');
  //   }
  //   const { password, ...restOfUserdataForLogin } = user;
  //   return restOfUserdataForLogin;
  // }

  // async findUserByEmail(email: string) {
  //   let user: User;
  //   try {
  //     user = await this.usersRepository.findOne(email);
  //   } catch (error) {
  //     throw new ServiceUnavailableException();
  //   }
  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
}

// public admin: UserDTO = {
//       name: process.env.ADMIN_USERNAME,
//       password: process.env.ADMIN_PASSWORD,
//     },
