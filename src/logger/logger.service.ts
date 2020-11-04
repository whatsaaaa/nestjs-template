import { Injectable, LoggerService as ls, Scope } from '@nestjs/common';
import { Logger, format, createLogger, transports } from 'winston';

import env from '../configuration/env';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService implements ls {
  private logger: Logger;

  constructor() {
    this.logger = createLogger({
      level: env().log.level,
      handleExceptions: true,
      format: env().isDevelopment
        ? format.combine(format.colorize(), format.simple())
        : format.combine(format.json()),
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' }),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string) {
    this.logger.error(message);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }
}
