import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ----------------- Class Validation -----------------
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties that do not exist in the DTO
      forbidNonWhitelisted: true, // throw an error if a property that does not exist in the DTO is sent
      disableErrorMessages: true, // disable error messages in production
    }),
  );
  // ----------------- SWAGGER -----------------
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API Store description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  // ----------------- CORS -----------------
  app.enableCors((opt) => {
    opt.origin = ['http://localhost:4200'];
  });
  // ----------------- server -----------------
  await app.listen(3000);
}
bootstrap();
