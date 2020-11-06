import { Injectable } from '@nestjs/common';
import { CustomLogger } from '../logger/logger.service';

@Injectable()
export class AppService {
  constructor(private logger: CustomLogger) {
    this.logger.setContext('AppService');
  }

  getHello(): string {
    this.logger.warn('Custom Logger Warning');
    return 'Hello World!';
  }
}
