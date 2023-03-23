import { Controller, Get } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

  constructor() {}

  @Get()
  async getHtml(@Res() res: Response) {
    
    res.sendFile('path/to/html/file.html');
  }
 
}
