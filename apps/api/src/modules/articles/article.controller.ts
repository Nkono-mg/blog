import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  Param,
  Get,
  Delete,
  Put,
  Patch,
} from '@nestjs/common';
import { ArticleService } from './article.service.js';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../users/Auth/jwt/jwt.guard.js';
import { ArticleDTO } from './DTO/article.dto.js';
import { UpdateArticleStatusDTO } from './DTO/status.dto.js';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  createArticle(@Body() dataForm: ArticleDTO) {
    return this.articleService.createArticle(dataForm);
  }

  @Get('title/:title')
  @UseGuards(JwtAuthGuard)
  findArticleByTitle(@Param('title') title: string) {
    return this.articleService.findArticleByTitle(title);
  }
  @Get('id/:id')
  @UseGuards(JwtAuthGuard)
  findArticleByID(@Param('id') id: string) {
    return this.articleService.findArticleByID(id);
  }
  @Get('all')
  @UseGuards(JwtAuthGuard)
  getAllArticles() {
    return this.articleService.getAllArticles();
  }
  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  deleteArticle(@Param('id') id: string) {
    return this.articleService.deleteArticle(id);
  }
  @Put('update/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  updateArticle(@Body() dataForm: ArticleDTO, @Param('id') id: string) {
    return this.articleService.updateArticle(id, dataForm);
  }
  @Patch('status/:id')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  updateArticleStatus(
    @Body() dto: UpdateArticleStatusDTO,
    @Param('id') id: string,
  ) {
    return this.articleService.updateArticleStatus(id, dto);
  }
}
