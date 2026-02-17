import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsHexColor,
  IsDate,
} from 'class-validator';

export class CategoryDTO {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  slug: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  @IsHexColor() // vérifie que c’est bien un code hex (#FFFFFF ou #FFFFFFFF)
  color: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
