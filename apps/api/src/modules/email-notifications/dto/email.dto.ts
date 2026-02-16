import { EmailNotificationStatusType } from '../types/email.notification.status.type.js';

export interface EmailNotificationDTO {
  id: string;
  articleId: string;
  recipients: string[];
  subject: string;
  sentAt: Date;
  status: EmailNotificationStatusType;
}
