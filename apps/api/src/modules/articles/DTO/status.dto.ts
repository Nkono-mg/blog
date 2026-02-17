import { IsEnum } from 'class-validator';
import { ArticleStatus } from '../../../../generated/prisma/enums.js';

export class UpdateArticleStatusDTO {
  @IsEnum(ArticleStatus)
  status: ArticleStatus;
}
