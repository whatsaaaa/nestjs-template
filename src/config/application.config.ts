import { registerAs } from '@nestjs/config';

import * as pkg from '../../package.json';

export default registerAs('application', () => ({
  name: process.env.APPLICATION_NAME,
  version: (pkg as any).version,
  description: (pkg as any).description,
  host: process.env.APPLICATION_HOST,
  port: process.env.APPLICATION_PORT,
  routePrefix: process.env.APPLICATION_ROUTE_PREFIX,
}));
