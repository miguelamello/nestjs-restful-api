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

    this.logger.debug('Debug message');
    this.logger.info('Info message');
    this.logger.error('Error message');

    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);

  }
 
}
