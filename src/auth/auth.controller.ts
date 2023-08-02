import { Body, Controller,Get,Request, Post, HttpCode, HttpStatus,UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignUpInput } from '../user/user.interface';
import { CreateUserDto,LoginUserDto } from '../user/dto/create-user.dto';
import { ApiTags,ApiOperation, ApiResponse, ApiQuery, ApiParam, ApiBody, ApiHeader } from '@nestjs/swagger';
// @Query()：用于定义查询参数，对应 URL 中的查询字符串参数。
// @Param()：用于定义路由参数，对应 URL 中的路由参数。
// @Body()：用于定义请求体参数，对应 POST 或 PUT 请求的请求体。
// @Header()：用于定义请求头参数，对应 HTTP 请求的头部。
// @Req()：用于定义整个 HTTP 请求对象。
// @Res()：用于定义整个 HTTP 响应对象。


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //注册
  @Post('register')
  @ApiTags('auth')
  @ApiOperation({ summary: '注册新用户' })
  @ApiResponse({ status: 200, description: '注册成功' })
  @ApiBody({ type: CreateUserDto })
  signUp(@Body() signUpInput: SignUpInput) {
    return this.authService.signUp(signUpInput);
  }

  //登录
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiTags('auth')
  @ApiOperation({ summary: '登录获取token' })
  @ApiResponse({ status: 201, description: '登录成功' })
  @ApiBody({ type: LoginUserDto })
  // @ApiQuery({ name: 'userName', type: String, required: true, description: '用户名' })
  // @ApiQuery({ name: 'password', type: String, required: true, description: '密码' })
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  //获取用户信息
  @UseGuards(AuthGuard)
  @Get('profile')
  @ApiTags('auth')
  @ApiOperation({ summary: '获取用户信息' })
  @ApiResponse({ status: 201, description: '获取成功' })
  @ApiHeader( {name: 'Authorization', description: 'token', required: true })
  getProfile(@Request() req) {
    return req.user;
  }
}