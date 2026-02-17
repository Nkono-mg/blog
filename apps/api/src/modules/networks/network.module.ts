import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { NetworksController } from './network.controller.js';
import { NetworkDAO } from './DAO/network.dao.js';
import { NetworkService } from './network.service.js';

@Module({
  imports: [PrismaModule],
  controllers: [NetworksController],
  providers: [NetworkService, PrismaService, NetworkDAO],
})
export class NetworkModule {}
