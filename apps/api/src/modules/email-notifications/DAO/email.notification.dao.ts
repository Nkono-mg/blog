import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service.js';
import { EmailNotificationDTO } from '../DTO/email.dto.js';

@Injectable()
export class EmailNotificationDAO {
  constructor(private readonly prismaService: PrismaService) {}

  async createEmail(dataForm: EmailNotificationDTO) {
    return this.prismaService.prisma.emailNotification.create({
      data: {
        subject: dataForm.subject,
        recipients: dataForm.recipients,
        article: {
          connect: { id: dataForm.articleId },
        },
        status: dataForm.status || 'pending',
        sentAt: dataForm.sentAt || new Date(),
      },
      select: {
        id: true,
        subject: true,
        status: true,
        sentAt: true,
      },
    });
  }
  async findEmailBySubject(subject: string) {
    return await this.prismaService.prisma.emailNotification.findFirst({
      where: { subject: subject },
    });
  }
  async getAllEmails() {
    return this.prismaService.prisma.emailNotification.findMany({});
  }
  async updateEmailStatus(
    id: string,
    updateData: Partial<EmailNotificationDTO>,
  ) {
    return this.prismaService.prisma.emailNotification.update({
      where: { id },
      data: updateData,
    });
  }
}
