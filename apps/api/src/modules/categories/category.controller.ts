import {
  Controller,
  Post,
  Get,
  UseGuards,
  Body,
  Delete,
  Param,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CategoriesService } from './category.service.js';
import { JwtAuthGuard } from '../users/Auth/jwt/jwt.guard.js';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { CategoryDTO } from './DTO/category.dto.js';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  createCategory(@Body() dataForm: CategoryDTO) {
    return this.categoryService.createCategory(dataForm);
  }

  @Get('slug/:slug')
  @UseGuards(JwtAuthGuard)
  findCategoryBySlug(@Param('slug') slug: string) {
    return this.categoryService.findCategoryBySlug(slug);
  }
  @Get('id/:id')
  @UseGuards(JwtAuthGuard)
  findCategoryByID(@Param('id') id: string) {
    return this.categoryService.findCategoryByID(id);
  }
  @Get('all')
  @UseGuards(JwtAuthGuard)
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }
  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
  @Put('update/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  updateCategory(@Param('id') id: string, @Body() dataFrom: CategoryDTO) {
    return this.categoryService.updateCategory(id, dataFrom);
  }
}
