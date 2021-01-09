import { Injectable } from '@nestjs/common';
import { Message } from '@how-to-mock-angular-service-with-dependency-inversion/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
