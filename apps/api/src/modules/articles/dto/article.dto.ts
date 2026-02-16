import { StatusArticleType } from '../types/status.article.type.js';

export interface ArticleDTO {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  userId: string;
  idCategories: string[];
  idNetwork: string[];
  status: StatusArticleType;
  featured: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
