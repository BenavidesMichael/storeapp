import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  //Api key injection value provider in Module
  constructor(@Inject('API_KEY') private apiKey: string) {}

  getHello(): string {
    return `Hello World! ${this.apiKey}`;
  }
}
