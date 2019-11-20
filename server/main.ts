import { NestFactory } from '@nestjs/core';
import { enableProdMode } from '@angular/core';
import { ApplicationModule } from './app.module';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  enableProdMode();
  app.use(compression());
  await app.listen(process.env.PORT || 4200);
}
bootstrap();
