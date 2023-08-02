import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
//JWT
import { AuthModule } from './auth/auth.module';
//用户表逻辑
import { UserModule } from './user/user.module';
//环境变量
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type:'mysql',
    host:'127.0.0.1',
    port:3306,
    username:'root',
    password:'gbt1173769534',
    database:'test',
    retryDelay:500,
    retryAttempts:10,
    synchronize:true,
    autoLoadEntities:true
  }),
  ScheduleModule.forRoot(),
  UserModule,
  AuthModule,
  ConfigModule.forRoot({
    envFilePath:'.env',
    isGlobal:true
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
