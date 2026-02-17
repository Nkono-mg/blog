import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service.js';
import { CategoryDTO } from '../DTO/category.dto.js';

@Injectable()
export class CategoryDAO {
  constructor(private readonly prismaService: PrismaService) {}

  async createCategory(dataForm: CategoryDTO) {
    return await this.prismaService.prisma.category.create({ data: dataForm });
  }
  async findCategoryBySlug(slug: string) {
    return await this.prismaService.prisma.category.findUnique({
      where: { slug: slug },
    });
  }
  async findCategoryByID(id: string) {
    return await this.prismaService.prisma.category.findUnique({
      where: { id: id },
    });
  }
  async getAllCategories() {
    return this.prismaService.prisma.category.findMany({});
  }

  async deleteCategory(categId: string) {
    return await this.prismaService.prisma.category.delete({
      where: { id: categId },
    });
  }
  async updateCategory(categId: string, updateData: Partial<CategoryDTO>) {
    return await this.prismaService.prisma.category.update({
      where: { id: categId },
      data: updateData,
      select: {
        name: true,
        slug: true,
        description: true,
        color: true,
      },
    });
  }
  async generateSlug(slug: string) {
    return slug
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-') // remplace tout ce qui n'est pas lettre/chiffre par "-"
      .replace(/^-+|-+$/g, ''); // supprime les "-" en début et fin
  }
}
