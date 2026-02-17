import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service.js';
import { ArticleDTO } from '../DTO/article.dto.js';
import { ArticleStatus } from '../../../../generated/prisma/enums.js';

@Injectable()
export class ArticleDAO {
  constructor(private readonly prismaService: PrismaService) {}

  async createArticle(dataForm: ArticleDTO) {
    return await this.prismaService.prisma.article.create({
      data: {
        title: dataForm.title,
        content: dataForm.content,
        excerpt: dataForm.excerpt,
        featured: dataForm.featured,
        publishedAt: dataForm.publishedAt,

        author: {
          connect: { id: dataForm.authorId },
        },

        network: {
          connect: { id: dataForm.networkId },
        },

        categories: dataForm.categoryIds
          ? {
              connect: dataForm.categoryIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });
  }
  async findArticleByTitle(title: string) {
    return await this.prismaService.prisma.article.findFirst({
      where: { title: title },
    });
  }
  async findArticleByID(id: string) {
    return await this.prismaService.prisma.article.findUnique({
      where: { id: id },
    });
  }
  async getAllArticles() {
    return this.prismaService.prisma.article.findMany({});
  }

  async deleteArticle(id: string) {
    return await this.prismaService.prisma.article.delete({
      where: { id: id },
    });
  }
  async updateArticle(id: string, updateData: Partial<ArticleDTO>) {
    return this.prismaService.prisma.article.update({
      where: { id },
      data: {
        title: updateData.title,
        content: updateData.content,
        excerpt: updateData.excerpt,
        featured: updateData.featured,
        publishedAt: updateData.publishedAt,

        author: updateData.authorId
          ? { connect: { id: updateData.authorId } }
          : undefined,

        network: updateData.networkId
          ? { connect: { id: updateData.networkId } }
          : undefined,

        categories: updateData.categoryIds
          ? {
              set: updateData.categoryIds.map((id) => ({ id })),
            }
          : undefined,
      },
    });
  }
  async updateArticleStatus(id: string, status: ArticleStatus) {
    return await this.prismaService.prisma.article.update({
      where: { id },
      data: {
        status,
        publishedAt: status === ArticleStatus.published ? new Date() : null,
      },
      select: {
        status: true,
        publishedAt: true,
      },
    });
  }
}
