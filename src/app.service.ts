import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import settings from './../settings';

@Injectable()
export class AppService {
  constructor(
    @Inject(settings.KEY) private appsetting: ConfigType<typeof settings>,
  ) {}

  getHello(): string {
    // return `Hello World! ${this.appsetting.api.key}`;
    return `Hello World!`;
  }
}
