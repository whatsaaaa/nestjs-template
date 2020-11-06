import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app/app.module';
import { terminal } from './helpers/terminal';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  terminal();
}
bootstrap();
