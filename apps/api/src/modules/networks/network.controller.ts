import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { NetworkService } from './network.service.js';
import { JwtAuthGuard } from '../users/Auth/jwt/jwt.guard.js';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { NetworkDTO } from './DTO/network.dto.js';

@Controller('networks')
export class NetworksController {
  constructor(private readonly networkService: NetworkService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  createNetwork(@Body() dataForm: NetworkDTO) {
    return this.networkService.createNetwork(dataForm);
  }

  @Get('name/:name')
  @UseGuards(JwtAuthGuard)
  findNetworkByName(@Param('name') name: string) {
    return this.networkService.findNetworkByName(name);
  }
  @Get('id/:id')
  @UseGuards(JwtAuthGuard)
  findNetworkByID(@Param('id') id: string) {
    return this.networkService.findNetworkByID(id);
  }
  @Get('all')
  @UseGuards(JwtAuthGuard)
  getAllNetworks() {
    return this.networkService.getAllNetworks();
  }
  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  deleteNetwork(@Param('id') id: string) {
    return this.networkService.deleteNetwork(id);
  }

  @Put('update/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  updateNetwok(@Param('id') id: string, @Body() dataForm: NetworkDTO) {
    return this.networkService.updateNetwok(id, dataForm);
  }
}
