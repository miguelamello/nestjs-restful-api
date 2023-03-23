import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

  constructor() {}

  @Get()
  async getHtml(@Res() res: Response) {

    res.sendFile('documentaion.html');

  }
 
}
