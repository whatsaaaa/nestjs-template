import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';
import { terminal } from './helpers/terminal';
import applicationConfig from './config/application.config';

async function bootstrap() {
  const appConfig = applicationConfig();
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(appConfig.routePrefix);
  await app.listen(appConfig.port);
  terminal();
}
bootstrap();
