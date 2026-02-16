import { Body, Post, Controller, UseInterceptors } from '@nestjs/common';
import { UsersService } from './user.service.js';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { UserDTO } from './DTO/user.dto.js';

@Controller('api/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Post('create')
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() dataForm: UserDTO) {
    return this.userService.createUser(dataForm);
  }
}
