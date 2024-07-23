import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  // Swagger (OpenAPI Docs)
  // This can be accessed by visiting {SERVER_URL}/api/docs
  const config = new DocumentBuilder()
    .setTitle('Resume builder application')
    .setDescription(
      "A resume builder that's built to make the mundane tasks of creating, updating your resume as easy as 1, 2, 3.",
    )
    // .addCookieAuth('Authentication', {
    //   type: 'http',
    //   in: 'cookie',
    //   scheme: 'Bearer',
    // })
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3333);
}
bootstrap();
