import { registerAs } from '@nestjs/config';

export default registerAs('logging', () => ({
  level: process.env.LOG_LEVEL,
  output: process.env.LOG_OUTPUT,
}));
