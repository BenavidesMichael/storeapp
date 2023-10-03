import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties that do not exist in the DTO
      forbidNonWhitelisted: true, // throw an error if a property that does not exist in the DTO is sent
      disableErrorMessages: true, // disable error messages in production
    }),
  );
  await app.listen(3000);
}
bootstrap();
