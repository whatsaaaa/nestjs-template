import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import env from './configuration/env';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [env],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
