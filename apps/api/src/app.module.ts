import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './modules/users/Auth/auth.module.js';
import { UserModule } from './modules/users/user.module.js';
import { ElasticsearchModule } from './modules/elasticsearch/elasticsearch.module.js';
import { CategoryModule } from './modules/categories/category.module.js';
import { NetworkModule } from './modules/networks/network.module.js';
import { ArticleModule } from './modules/articles/article.module.js';
import { EmailNotificationModule } from './modules/email-notifications/email.notification.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UserModule,
    ElasticsearchModule,
    CategoryModule,
    NetworkModule,
    ArticleModule,
    EmailNotificationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
