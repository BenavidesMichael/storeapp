import { Module, Global } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import settings from './../../settings';

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
        synchronize: configService.database.synchronize,
        autoLoadEntities: configService.database.autoLoadEntities,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        },
        options: {
          // encrypt: true, // for azure
          trustServerCertificate: true, // change to true for local dev / self-signed certs
        },
      }),
      inject: [settings.KEY],
    }),
  ],
  exports: [
    TypeOrmModule, // permet d'exporter la connexion a la base de donnée pour l'utiliser dans d'autres modules
  ],
})
export class DatabaseModule {}
