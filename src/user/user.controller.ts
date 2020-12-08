import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { NewUserDto } from './dto/new-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() newUserDto: NewUserDto) {
    return this.userService.addNewUser(newUserDto);
  }
}