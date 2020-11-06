import { registerAs } from '@nestjs/config';

import { getEnv, toBool } from '../helpers/env';

export default registerAs('database', () => ({
  host: getEnv('TYPEORM_HOST'),
  port: getEnv('TYPEORM_PORT'),
  username: getEnv('TYPEORM_USERNAME'),
  password: getEnv('TYPEORM_PASSWORD'),
  database: getEnv('TYPEORM_DATABASE'),
  synchronize: toBool(getEnv('TYPEORM_SYNCHRONIZE')),
  logging: getEnv('TYPEORM_LOGGING'),
}));
