import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {

  constructor() {}

  @Get()
  getHello(): Message {

    return { 
      statusCode: 200, 
      message: 'show the microservice' 
    };

  }
 
}
