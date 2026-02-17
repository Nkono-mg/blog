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
  await app.listen(PORT);
}
bootstrap();
