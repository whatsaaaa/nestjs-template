import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { LoggerModule } from './modules/logger/logger.module';

import { CatsModule } from './modules/cats/cats.module';

import applicationConfig from './config/application.config';
import environmentConfig from './config/environment.config';
import databaseConfig from './config/database.config';

/**
 * Load Configurations
 */

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [applicationConfig, environmentConfig, databaseConfig],
    }),
    LoggerModule,
    CatsModule,
  ],
  providers: [Logger],
})
export class AppModule {}
