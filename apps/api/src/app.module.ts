import { Module } from '@nestjs/common';

import { CategoriesController } from './modules/categories/category.controller.js';
import { ArticlesController } from './modules/articles/article.controller.js';
import { EmailNotificationsController } from './modules/email-notifications/email-notification.controller.js';
import { NetworksController } from './modules/networks/network.controller.js';
import { UsersController } from './modules/users/user.controller.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { UsersService } from './modules/users/user.service.js';
import { UsersDAO } from './modules/users/DAO/user.dao.js';

@Module({
  imports: [PrismaModule],
  controllers: [
    ArticlesController,
    CategoriesController,
    EmailNotificationsController,
    NetworksController,
    UsersController,
  ],
  providers: [UsersService, UsersDAO],
})
export class AppModule {}
