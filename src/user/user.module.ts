import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
//Http
import { HttpModule } from '@nestjs/axios'
//ORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user/user.entity';
import { test } from '../entities/test.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User,test]), 
  HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
})],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
