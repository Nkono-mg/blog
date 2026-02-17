import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsOptional,
  IsDate,
} from 'class-validator';

export class NetworkDTO {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsString()
  @MaxLength(100)
  description: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
