import { Module, Global } from '@nestjs/common';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  providers: [
    {
      //useValue : permet de dire a notre module qu'on a besoin d'injecter une valeur autre part.
      provide: 'API_KEY', // name
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY, // value
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
