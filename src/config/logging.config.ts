import { registerAs } from '@nestjs/config';

import { getEnv } from '../helpers/env';

export default registerAs('logging', () => ({
  level: getEnv('LOG_LEVEL'),
  output: getEnv('LOG_OUTPUT'),
}));
