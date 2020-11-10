import { Module, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LoggerModule } from './modules/logger/logger.module';

import { HeroesGameModule } from './modules/heroes/heroes.module';

import applicationConfig from './config/application.config';
import environmentConfig from './config/environment.config';
import databaseConfig from './config/database.config';
import { UsersModule } from './modules/user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [applicationConfig, environmentConfig, databaseConfig],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'USERNAME',
      password: 'PASSWORD',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    LoggerModule,
    HeroesGameModule,
    UsersModule,
  ],
  providers: [Logger],
})
export class AppModule {}
