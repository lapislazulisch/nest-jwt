import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { hash,compare } from 'bcrypt'; // hash password
import { SignUpInput } from '../user/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  //验证用户信息
  async validateUser(userName: string, password: string) {
    const user = await this.usersService.findOne(userName);
  
    if (!user) return null;
  
    const valid = await compare(password, user.encryptedPassword);
  
    if (valid) return user;
  
    return null;
  }
  //登录获取token
  async signIn(userName:string, password:string) {
    
    const user = await this.validateUser(userName, password);
    console.log(user);
    
    if (!user) {
      throw new UnauthorizedException('User email or password incorrect');
    }

    const payload = { sub: user.userId, username: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload,{secret: process.env.JWT_SECRET}),
    };
  }
  //注册
  async signUp(signUpInput: SignUpInput) {
    const { password,username,phone,email } = signUpInput;
    
    const encryptedPassword = await hash(password,10);
		// only send encrypted password to user service to create user
    return this.usersService.create(
      encryptedPassword,
      username,
      phone,
      email,
     );
  }
}