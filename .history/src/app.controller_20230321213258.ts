import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller()
export class AppController {

  constructor() {}

  @Get()
  getFile(): StreamableFile {

    const file = createReadStream(join(process.cwd(), 'package.json'));
    return new StreamableFile(file);
    
  }
 
}
