import { Controller, Get } from '@nestjs/common';
import { Message } from './interfaces/message.interface';

@Controller()
export class AppController {

  constructor() {}

  @Get()
  getHello(): Message {

    return { 
      statusCode: 200, 
      message: 'show the microservice documentation' 
    };

  }
 
}
