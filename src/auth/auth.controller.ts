import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: LoginUserDto) {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }

  // @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() userData: CreateUserDto) {
    return this.authService.register(userData);
  }

}
