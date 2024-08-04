import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as argon2 from 'argon2';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRO } from 'src/user/user.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(email);

    console.dir(user);
    if (!user) {
      throw new UnauthorizedException();
    }

    if (!await argon2.verify(user.password, pass)) {
      throw new UnauthorizedException();
    }

    return this.userService.buildUserRO(user);
  }

  async register(dto: CreateUserDto): Promise<UserRO> {
    return this.userService.create(dto);
  }
}
