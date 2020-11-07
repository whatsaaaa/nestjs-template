import { Injectable } from '@nestjs/common';
import { CustomLogger } from '../logger/logger.service';
import { Cat } from './interfaces/cats.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(private logger: CustomLogger) {
    this.logger.setContext('CatsService');
  }

  create(cat: Cat) {
    this.logger.log(`Creating a new cat: ${JSON.stringify(cat)}`);
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    this.logger.log(`Finding all cats.`);
    return this.cats;
  }
}
