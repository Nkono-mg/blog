import { BadRequestException, Injectable } from '@nestjs/common';
import { ArticleDAO } from './DAO/article.dao.js';
import { ArticleDTO } from './DTO/article.dto.js';
import { UpdateArticleStatusDTO } from './DTO/status.dto.js';

@Injectable()
export class ArticleService {
  constructor(private readonly articleDAO: ArticleDAO) {}

  async createArticle(dataForm: ArticleDTO) {
    try {
      const { title, content, authorId, networkId } = dataForm;
      if (!title || !content || !authorId || !networkId) {
        throw new BadRequestException('Tous les champs sont obligatoires');
      }
      const savedArticle = await this.articleDAO.createArticle(dataForm);
      if (!savedArticle) {
        throw new BadRequestException(
          `Erreur lors de l'enregistrement de L'Article ${title}`,
        );
      }
      return {
        success: true,
        data: savedArticle,
      };
    } catch (error) {
      throw error;
    }
  }
  async findArticleByTitle(title: string) {
    try {
      if (!title) {
        throw new BadRequestException(`Artilce ${title} est vide`);
      }
      const articleToFind = await this.articleDAO.findArticleByTitle(title);
      if (!articleToFind) {
        throw new BadRequestException(`Article ${title} n'existe pas`);
      }
      return { success: true, data: articleToFind };
    } catch (error) {
      throw error;
    }
  }
  async findArticleByID(id: string) {
    try {
      if (!id) {
        throw new BadRequestException(`Artilce ${id} est vide`);
      }
      const articleToFind = await this.articleDAO.findArticleByID(id);
      if (!articleToFind) {
        throw new BadRequestException(`Article ${id} n'existe pas`);
      }
      return { success: true, data: articleToFind };
    } catch (error) {
      throw error;
    }
  }
  async getAllArticles() {
    try {
      const articles = await this.articleDAO.getAllArticles();
      if (articles.length === 0) {
        throw new BadRequestException(`Liste des articles est vide`);
      }
      return { success: true, data: articles };
    } catch (error) {
      throw error;
    }
  }
  async deleteArticle(id: string) {
    try {
      if (!id) {
        throw new BadRequestException(`Article ${id} est vide`);
      }
      const articleToDelete = await this.articleDAO.deleteArticle(id);
      if (!articleToDelete) {
        throw new BadRequestException(
          `Erreur de suppression de la Article ${id}`,
        );
      }
      return { success: true, message: 'Suppression avec succès' };
    } catch (error) {
      throw error;
    }
  }
  async updateArticle(id: string, dataForm: ArticleDTO) {
    if (!id) {
      throw new BadRequestException(`Article ${id} est vide`);
    }
    try {
      const { title, content, authorId, networkId } = dataForm;
      if (!title || !content || !networkId) {
        throw new BadRequestException('Tous les champs sont obligatoires');
      }
      const updatedArticle = await this.articleDAO.updateArticle(id, dataForm);
      if (!updatedArticle) {
        throw new BadRequestException(
          `Une erreur lors de la mise à jour de Artilce ${title}`,
        );
      }
      return { success: true, data: updatedArticle };
    } catch (error) {
      throw error;
    }
  }
  async updateArticleStatus(id: string, dto: UpdateArticleStatusDTO) {
    if (!id) {
      throw new BadRequestException(`Article ${id} est vide`);
    }
    try {
      const updatedArticleStatus = await this.articleDAO.updateArticleStatus(
        id,
        dto.status,
      );
      if (!updatedArticleStatus) {
        throw new BadRequestException(
          `Une erreur lors de la mise à jour de status artilce ${id}`,
        );
      }
      return { success: true, data: updatedArticleStatus };
    } catch (error) {
      throw error;
    }
  }
}
