import { Module } from '@nestjs/common';
import { PrismaModule } from '../../prisma/prisma.module.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import { EmailNotificationService } from './email-notification.service.js';
import { EmailNotificationController } from './email-notification.controller.js';
import { EmailNotificationDAO } from './DAO/email.notification.dao.js';
import { ArticleDAO } from '../articles/DAO/article.dao.js';

@Module({
  imports: [PrismaModule],
  controllers: [EmailNotificationController],
  providers: [
    EmailNotificationService,
    PrismaService,
    EmailNotificationDAO,
    ArticleDAO,
  ],
})
export class EmailNotificationModule {}
