import { Module } from '@nestjs/common';
// https://docs.nestjs.com/techniques/configuration
import { ConfigModule } from '@nestjs/config';
// https://docs.nestjs.com/techniques/http-module
import { HttpModule } from '@nestjs/axios';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { validationConfig } from './validation-config';

@Module({
  imports: [
    ConfigModule.forRoot(validationConfig),
    UsersModule,
    ProductsModule,
    HttpModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, //useClass : par defaut, qui permet de dire a notre module qu'on a besoin d'injecter ce service autre part.
  ],
})
export class AppModule {}
