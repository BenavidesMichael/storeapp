import { registerAs } from '@nestjs/config';

export default registerAs('settings', () => ({
  api: {
    key: process.env.API_KEY,
  },
  database: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10) || 1433,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    name: process.env.NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  mail: {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT, 10) || 587,
    username: process.env.MAIL_USERNAME,
    password: process.env.MAIL_PASSWORD,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  },
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
  },
}));
