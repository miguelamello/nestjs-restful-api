import { Controller, Get, Param, ParseFloatPipe, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { ConvertService } from './convert.service';
import Message from '../interfaces/message.interface';

@Controller('convert')
export class ConvertController {

  // Initialize some variables
  constructor( 
    private convertService: ConvertService, 
    
  ) {}

  // Endpoint for converting a given currency to all the other currencies.
  @Get(':currency/:amount')
  convert(
    @Param('currency') currency: string, 
    @Param('amount', ParseFloatPipe) amount: number
  ): Message {
    return this.convertService.getConversion(currency, amount);
  }

  // Endpoint for returning the available currency codes for conversion to the client.
  // Exemple: http://localhost:3000/convert/currencies
  @Get('currencies')  
  currencies(): Message {
    return { 
      statusCode: 200, 
      message: this.convertService.getCurrencyNames()
    }
  }
}
