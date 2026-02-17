import { BadRequestException, Injectable } from '@nestjs/common';
import { CategoryDAO } from './DAO/category.dao.js';
import { CategoryDTO } from './DTO/category.dto.js';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoryDAO: CategoryDAO) {}

  async createCategory(dataForm: CategoryDTO) {
    try {
      const { name, slug, description, color } = dataForm;
      if (!name || !slug || !description || !color) {
        throw new BadRequestException('Tous les champs sont obligatoires');
      }
      const isExistingSlug = await this.categoryDAO.findCategoryBySlug(slug);
      if (isExistingSlug) {
        throw new BadRequestException('Slug existe déjà !');
      }
      const slugToSave = await this.categoryDAO.generateSlug(slug);
      const categoryToSave = { ...dataForm, slug: slugToSave };
      const savedCategory =
        await this.categoryDAO.createCategory(categoryToSave);
      if (!savedCategory) {
        throw new BadRequestException(
          `Erreur lors de l'enregistrement de category ${name}`,
        );
      }
      return {
        success: true,
        data: savedCategory,
      };
    } catch (error) {
      throw error;
    }
  }
  async findCategoryBySlug(slug: string) {
    try {
      if (!slug) {
        throw new BadRequestException(`Slug ${slug} est vide`);
      }
      const categToFind = await this.categoryDAO.findCategoryBySlug(slug);
      if (!categToFind) {
        throw new BadRequestException(`Slug ${slug} n'existe pas`);
      }
      return { success: true, data: categToFind };
    } catch (error) {
      throw error;
    }
  }
  async findCategoryByID(categId: string) {
    try {
      if (!categId) {
        throw new BadRequestException(`ID ${categId} est vide`);
      }
      const categToFind = await this.categoryDAO.findCategoryByID(categId);
      if (!categToFind) {
        throw new BadRequestException(`ID ${categId} n'existe pas`);
      }
      return { success: true, data: categToFind };
    } catch (error) {
      throw error;
    }
  }
  async getAllCategories() {
    try {
      const categories = await this.categoryDAO.getAllCategories();
      if (categories.length === 0) {
        throw new BadRequestException(`Liste catégorie est vide`);
      }
      return { success: true, data: categories };
    } catch (error) {
      throw error;
    }
  }
  async deleteCategory(categId: string) {
    try {
      if (!categId) {
        throw new BadRequestException(`Slug ${categId} est vide`);
      }
      const categToDelete = await this.categoryDAO.deleteCategory(categId);
      if (!categToDelete) {
        throw new BadRequestException(
          `Erreur de suppression de la Catégorie ${categId}`,
        );
      }
      return { success: true, message: 'Suppression avec succès' };
    } catch (error) {
      throw error;
    }
  }
  async updateCategory(categId: string, dataForm: CategoryDTO) {
    if (!categId) {
      throw new BadRequestException(`Slug ${categId} est vide`);
    }
    try {
      const { name, slug, description, color } = dataForm;
      if (!name || !slug || !description || !color) {
        throw new BadRequestException(`Tous les champs sont obligatoires`);
      }
      const isExistingSlug = await this.categoryDAO.findCategoryBySlug(slug);
      if (isExistingSlug) {
        throw new BadRequestException('Slug existe déjà !');
      }
      const slugToSave = await this.categoryDAO.generateSlug(slug);
      const categoryToUpdate = { ...dataForm, slug: slugToSave };
      const updatedCategory = await this.categoryDAO.updateCategory(
        categId,
        categoryToUpdate,
      );
      if (!updatedCategory) {
        throw new BadRequestException(
          `Une erreur lors de la mise à jour de catégorie ${name}`,
        );
      }
      return { success: true, data: categoryToUpdate };
    } catch (error) {
      throw error;
    }
  }
}
