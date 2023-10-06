import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import settings from './../../settings';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigType<typeof settings>) => ({
        type: 'mssql',
        host: configService.database.host,
        port: configService.database.port,
        username: configService.database.username,
        password: configService.database.password,
        database: configService.database.name,
        entities: ['src/server/common/data/models/**/*.model{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    {
      //useValue : permet de dire a notre module qu'on a besoin d'injecter une valeur autre part.
      provide: 'API_KEY', // name
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, // value
    },
  ],
  exports: [
    'API_KEY',
    TypeOrmModule, // permet d'exporter la connexion a la base de donnée pour l'utiliser dans d'autres modules
  ],
})
export class DatabaseModule {}
