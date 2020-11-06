import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from '../logger/logger.module';

import applicationConfig from '../../config/application.config';
import environmentConfig from '../../config/environment.config';
import databaseConfig from '../../config/database.config';
import loggingConfig from '../../config/logging.config';

/**
 * Load Configurations
 */

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        applicationConfig,
        environmentConfig,
        databaseConfig,
        loggingConfig,
      ],
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
