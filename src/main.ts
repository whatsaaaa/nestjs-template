import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';
import env from './configuration/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });
  await app.listen(env().app.port, env().app.host, () => {
    console.log(
      `Application started listening to ${env().app.host}:${
        env().app.port
      } in ${env().node} environment`,
    );
  });
}
bootstrap();
