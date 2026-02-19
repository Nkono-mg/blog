import { IsEnum } from 'class-validator';
import { EmailStatus } from '../../../../generated/prisma/enums.js';

export class EmailNotificationStatusDTO {
  @IsEnum(EmailStatus)
  status: EmailStatus;
}
