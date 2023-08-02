import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//引入Dto
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
//引入实体
import { User } from '../entities/user/user.entity';
import { SignUpInput } from '../user/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  
  //查询用户信息
  async findOne(userName: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { userName } });
  }

  //注册
  async create(encryptedPassword: string,username: string,phone: string,email: string): Promise<User> {
    let users = new User();
    users.userName = username;
    users.encryptedPassword = encryptedPassword;
    users.phone = phone;
    users.email = email;
    return this.userRepository.save(users);
  }
}
