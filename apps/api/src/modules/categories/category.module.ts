import { Module } from '@nestjs/common';
import { CategoriesService } from './category.service.js';
import { CategoriesController } from './category.controller.js';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { CategoryDAO } from './DAO/category.dao.js';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaService, CategoryDAO],
})
export class CategoryModule {}
