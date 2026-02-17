import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service.js';
import { AuthController } from './auth.controller.js';
import { JwtStrategy } from './jwt/jwt.strategy.js';
import { ConfigService } from '@nestjs/config';
import { UsersDAO } from '../DAO/user.dao.js';
import { LocalStrategy } from './jwt/local.strategy.js';
import { PrismaModule } from '../../../prisma/prisma.module.js';

@Module({
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersDAO, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
