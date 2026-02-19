import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import { EmailNotificationDAO } from './DAO/email.notification.dao.js';
import { EmailNotificationDTO } from './DTO/email.dto.js';
import { EmailStatus } from '../../../generated/prisma/enums.js';
import { ArticleDAO } from '../articles/DAO/article.dao.js';

@Injectable()
export class EmailNotificationService {
  private readonly logger = new Logger(EmailNotificationService.name);

  constructor(
    private readonly emailNotificationDAO: EmailNotificationDAO,
    private readonly articleDAO: ArticleDAO,
  ) {
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SENDGRID_API_KEY is missing in .env');
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async createAndSendEmail(dataForm: EmailNotificationDTO) {
    const { subject, recipients, articleId } = dataForm;

    if (!subject || !recipients?.length || !articleId) {
      throw new BadRequestException('Tous les champs sont obligatoires');
    }

    // Enregistre la notification avec statut pending
    const emailRecord = await this.emailNotificationDAO.createEmail({
      ...dataForm,
      status: EmailStatus.pending,
      sentAt: new Date(),
    });

    try {
      const isExistingArticle =
        await this.articleDAO.findArticleByID(articleId);
      if (!isExistingArticle) {
        throw new BadRequestException(`Article ${articleId} n'existe pas`);
      }
      await sgMail.sendMultiple({
        to: recipients,
        from: 'nkono209@gmail.com',
        subject,
        text: `Article lié à l'ID ${articleId}`,
        html: `<div><h1>${isExistingArticle.title}</h1>
        <p>${isExistingArticle.content}</p>
        </div>`,
      });

      emailRecord.status = EmailStatus.sent;
      emailRecord.sentAt = new Date();
      this.logger.log(`Email envoyé avec succès à ${recipients.join(', ')}`);
    } catch (error) {
      emailRecord.status = EmailStatus.failed;
      this.logger.error(
        `Erreur lors de l'envoi de l'email: ${error.message || error}`,
      );
    }

    return this.emailNotificationDAO.updateEmailStatus(emailRecord.id, {
      status: emailRecord.status,
      sentAt: emailRecord.sentAt,
    });
  }
}
