import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/errors/filters/global-exception.filter';
import { ResponseInterceptor } from './common/response/interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new ResponseInterceptor());

  const port = Number(process.env.PORT) || 4000;
  await app.listen(port);

  console.log(`API running on http://localhost:${port}`);
}

bootstrap();
