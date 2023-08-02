import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;
}

export class LoginUserDto {
    @ApiProperty()
    username: string;
  
    @ApiProperty()
    password: string;
  
  }
