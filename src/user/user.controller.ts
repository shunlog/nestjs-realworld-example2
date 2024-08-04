import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UserRO } from './user.interface';
import { UpdateUserDto } from './dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { User } from './user.decorator';
import { ValidationPipe } from '../shared/pipes/validation.pipe';

import {
  ApiBearerAuth, ApiTags
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get('user')
  async findMe(@User('email') email: string): Promise<UserRO> {
    return await this.userService.findByEmail(email);
  }

  @Put('user')
  async update(@User('id') userId: number, @Body() userData: UpdateUserDto) {
    return await this.userService.update(userId, userData);
  }

  @Delete('users/:slug')
  async delete(@Param() params) {
    return await this.userService.delete(params.slug);
  }

}
