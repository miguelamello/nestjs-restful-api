import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {

  constructor() {}

  @Get()
  async getHtml(@Res() res: Response) {

    const filePath = path.join(__dirname, 'documentation.html');
    res.sendFile('./documentation.html');

  }
 
}
