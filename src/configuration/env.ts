export default () => ({
  node: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
  isDevelopment: process.env.NODE_ENV === 'development',
  app: {
    name: process.env.APPLICATION_NAME,
    host: process.env.APPLICATION_HOST,
    port: parseInt(process.env.APPLICATION_PORT, 10) || 3000,
  },
  db: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 532,
  },
  log: {
    level: process.env.LOG_LEVEL,
  },
});
