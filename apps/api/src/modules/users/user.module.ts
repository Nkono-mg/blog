import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { UsersDAO } from './DAO/user.dao.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { ElasticsearchModule } from '../elasticsearch/elasticsearch.module.js';
import { ElasticsearchService } from '../elasticsearch/elasticsearch.service.js';

@Module({
  imports: [PrismaModule, ElasticsearchModule],
  controllers: [UserController],
  providers: [UserService, UsersDAO, PrismaService, ElasticsearchService],
  exports: [UserService, UsersDAO],
})
export class UsersModule {}
