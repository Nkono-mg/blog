import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsArray,
  IsUUID,
  MaxLength,
  IsEmail,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { EmailStatus } from '../../../../generated/prisma/enums.js';

export class EmailNotificationDTO {
  @IsUUID()
  @IsNotEmpty()
  articleId: string;

  @IsArray()
  @IsEmail({}, { each: true })
  recipients: string[];

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  subject: string;

  @IsDateString()
  @IsOptional()
  sentAt?: Date;

  @IsEnum(EmailStatus)
  status: EmailStatus;
}
