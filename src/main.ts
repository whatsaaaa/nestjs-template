import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';

import { AppModule } from './modules/app/app.module';
import { terminal } from './helpers/terminal';
import applicationConfig from './config/application.config';
import loggingConfig from './config/logging.config';
import environmentConfig from './config/environment.config';

async function bootstrap() {
  const appConfig = applicationConfig();
  const logConfig = loggingConfig();
  const envConfig = environmentConfig();

  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new transports.Console({
          level: logConfig.level,
          handleExceptions: true,
          format:
            envConfig.node !== 'development'
              ? format.combine(format.json())
              : format.combine(format.colorize(), format.simple()),
        }),
      ],
    }),
  });

  app.setGlobalPrefix(appConfig.routePrefix);
  await app.listen(appConfig.port);

  terminal();
}
bootstrap();
