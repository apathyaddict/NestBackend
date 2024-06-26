import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  console.log(process.env.DB_PASSWORD);

  const app = await NestFactory.create(AppModule);
  //the bottom requires validation accros the whole app can be done in the controller section to0
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3200);
}
bootstrap();
