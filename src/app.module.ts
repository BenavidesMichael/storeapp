import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
// https://docs.nestjs.com/techniques/http-module
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService, //useClass : par defaut, qui permet de dire a notre module qu'on a besoin d'injecter ce service autre part.
    {
      /*
      useFactory :
        - Manage asynchronous, for DB connections, modules Http, etc.
        - permet de dire qu'on a besoin d'injecter une fonction autre part.
      */
      // /!\ ne pas faire appels a des API
      // pour des connections a des DB
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const requests = http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = await lastValueFrom(requests);
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
