import { Controller, Get, Header, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {

  constructor() {}

  @Get()
  @Header('Content-Type', 'text/html')
  getDocumantation(): StreamableFile {

    const file = createReadStream(join(process.cwd(), 'documentation.html'));
    return new StreamableFile(file);

  }
 
}
