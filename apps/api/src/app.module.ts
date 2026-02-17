import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module.js';
import { AuthModule } from './modules/users/Auth/auth.module.js';
import { UsersModule } from './modules/users/user.module.js';
import { ElasticsearchModule } from './modules/elasticsearch/elasticsearch.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ElasticsearchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
