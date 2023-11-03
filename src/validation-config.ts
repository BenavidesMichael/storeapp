import * as Joi from 'joi';
import { environment } from 'environements';
import settings from './../settings';

/*
  Ce fichier configure la validation des variables d'environnement en utilisant Joi.
  Il définit également un schéma de validation pour les variables d'environnement,
  en s'assurant qu'elles ont les valeurs attendues.
*/
export const validationConfig = {
  envFilePath: environment[process.env.NODE_ENV] || '.env',
  isGlobal: true,
  load: [settings],
  // validation des variables d'environement pour eviter les erreurs des variables d'environement manquantes dans les servpeurs
  // valide aussi le type des variables d'environement (string, number, etc.)
  validationSchema: Joi.object({
    // .env
    DATABASE_HOST: Joi.string().default('localhost'),
    DATABASE_PORT: Joi.number().required().default(1433),
    DATABASE_USER: Joi.string().required(),
    DATABASE_PASSWORD: Joi.string().required(),
    DATABASE_NAME: Joi.string().required(),
    DATABASE_AUTO_LOAD_ENTITIES: Joi.boolean().required().default(false),
    DATABASE_SYNCHRONIZE: Joi.boolean().required().default(false),
  }),
};
