import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME,
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT) || 4000,
  logLevel: process.env.LOG_LEVEL || 'debug',
  frontendUrl: process.env.FRONTEND_URL || 'https://localhost:3000',
}));
