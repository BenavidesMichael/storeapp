import { registerAs } from '@nestjs/config';

// serts a charger les variables d'environnement et les injecter dans le module
// . Il lit les valeurs des variables d'environnement du fichier .env et les rend disponibles pour le reste de l'application.
export default registerAs('settings', () => ({
  api: {
    key: process.env.API_KEY,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE),
    autoLoadEntities: Boolean(process.env.DATABASE_AUTO_LOAD_ENTITIES),
    trustServerCertificate: true,
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
