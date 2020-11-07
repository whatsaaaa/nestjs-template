import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { terminal } from './helpers/terminal';
import { CustomLogger } from './modules/logger/logger.service';
import applicationConfig from './config/application.config';

async function bootstrap() {
  const appConfig = applicationConfig();

  const app = await NestFactory.create(AppModule);
  app.useLogger(new CustomLogger());
  app.setGlobalPrefix(appConfig.routePrefix);
  await app.listen(appConfig.port);

  terminal();
}
bootstrap();
