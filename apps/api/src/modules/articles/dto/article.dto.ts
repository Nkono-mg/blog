import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsArray,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class ArticleDTO {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsOptional()
  @IsString()
  excerpt?: string;

  @IsString()
  status?: string; // draft par défaut dans Prisma

  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsDateString()
  publishedAt?: Date;

  // Relations obligatoires
  @IsUUID()
  @IsNotEmpty()
  authorId: string;

  @IsUUID()
  @IsNotEmpty()
  networkId: string;

  // Relation many-to-many avec Category
  @IsArray()
  @IsUUID('4', { each: true })
  categoryIds: string[];
}
