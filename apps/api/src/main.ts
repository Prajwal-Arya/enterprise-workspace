import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/errors/filters/global-exception.filter';
import { ResponseInterceptor } from './common/response/interceptors/response.interceptor';
import {
  BadRequestException,
  Logger,
  ValidationError,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const frontendUrl = configService.getOrThrow<string>('app.frontendUrl');

  app.use(helmet());

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  const logger = new Logger('Bootstrap');

  app.setGlobalPrefix('api');

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,

      exceptionFactory: (errors: ValidationError[]) => {
        const details = errors.map((error) => ({
          field: error.property,
          errors: Object.values(error.constraints ?? {}),
        }));

        return new BadRequestException({
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details,
        });
      },
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Enterprise Workspace API')
    .setDescription('REST API documentation for Enterprise Workspace')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, swaggerDocument);

  const port = Number(process.env.PORT) || 4000;
  await app.listen(port);

  logger.log(`API running on http://localhost:${port}`);
  logger.log(`Swagger docs running on http://localhost:${port}/api/docs`);
}

bootstrap();
