import { Controller, Get, Header, StreamableFile, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {

  constructor(
    @Inject('winston') private readonly logger: Logger
  ) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDocumentation(): StreamableFile {

    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);

  }
 
}
