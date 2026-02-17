import {
  Body,
  Post,
  Controller,
  UseInterceptors,
  UseGuards,
  Get,
  Request,
  Delete,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service.js';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { UserDTO } from './DTO/user.dto.js';
import { JwtAuthGuard } from './Auth/jwt/jwt.guard.js';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('create')
  @UseInterceptors(NoFilesInterceptor())
  createUser(@Body() dataForm: UserDTO) {
    return this.userService.createUser(dataForm);
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
  @Get('one/:id')
  @UseGuards(JwtAuthGuard)
  getOneUser(@Param('id') id: string) {
    return this.userService.getOneUser(id);
  }
  @Get('all')
  @UseGuards(JwtAuthGuard)
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
