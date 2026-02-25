import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  config();
  app.use(cookieParser()); //necessaire pour lire les cookies
  const PORT = process.env.PORT!;
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: process.env.NEXT_PUBLIC_FRONTEND_URL!,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(PORT);
}
bootstrap();
