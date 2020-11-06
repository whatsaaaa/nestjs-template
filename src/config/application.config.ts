import { registerAs } from '@nestjs/config';

import { getEnv } from '../helpers/env';
import * as pkg from '../../package.json';

export default registerAs('application', () => ({
  name: getEnv('APPLICATION_NAME'),
  version: (pkg as any).version,
  description: (pkg as any).description,
  host: getEnv('APPLICATION_HOST'),
  port: getEnv('APPLICATION_PORT'),
  routePrefix: getEnv('APPLICATION_ROUTE_PREFIX'),
}));
