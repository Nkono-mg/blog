import { Module } from '@nestjs/common';

import { PrismaModule } from '../../prisma/prisma.module.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { NetworksController } from './network.controller.js';
import { NetworksService } from './network.service.js';
import { NetworkDAO } from './DAO/network.dao.js';

@Module({
  imports: [PrismaModule],
  controllers: [NetworksController],
  providers: [NetworksService, PrismaService, NetworkDAO],
})
export class NetworkModule {}
