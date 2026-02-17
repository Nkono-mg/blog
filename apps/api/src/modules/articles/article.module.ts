import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { ArticleController } from './article.controller.js';
import { ArticleService } from './article.service.js';
import { ArticleDAO } from './DAO/article.dao.js';

@Module({
  imports: [PrismaModule],
  controllers: [ArticleController],
  providers: [ArticleService, PrismaService, ArticleDAO],
})
export class ArticleModule {}
