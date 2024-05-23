import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter, LogsService, RequestsLoggerMiddleware } from '@thefirstspine/logs-nest';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Load dotev config
  require('dotenv').config();

  // Launch app
  const app = await NestFactory.create(AppModule.register());
  app.enableCors();
  app.useGlobalFilters(new ErrorFilter(new LogsService()));
  app.use(RequestsLoggerMiddleware.use);
  await app.listen(process.env.PORT);
}
bootstrap();
