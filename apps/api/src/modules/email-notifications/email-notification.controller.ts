import {
  Body,
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { EmailNotificationService } from './email-notification.service.js';
import { JwtAuthGuard } from '../users/Auth/jwt/jwt.guard.js';
import { NoFilesInterceptor } from '@nestjs/platform-express';
import { EmailNotificationDTO } from './DTO/email.dto.js';

@Controller('email-notifications')
export class EmailNotificationController {
  constructor(
    private readonly emailNotificationService: EmailNotificationService,
  ) {}

  @Post('create-send')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(NoFilesInterceptor())
  createAndSendEmail(@Body() dataForm: EmailNotificationDTO) {
    return this.emailNotificationService.createAndSendEmail(dataForm);
  }
}
