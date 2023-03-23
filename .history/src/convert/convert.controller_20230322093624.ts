import { Controller, Get, Param } from '@nestjs/common';
import { Message } from '../interfaces/message.interface';
import currencyCodes from '../convert/currency-codes';
import currencyNames from '../convert/currency-names';

@Controller('convert')
export class ConvertController {

  // Endpoint for converting a given currency to all the other currencies.
  @Get(':currency/:amount')
  convert(@Param('currency') currency: string, @Param('amount') amount: number): string {
    
    return { 
      statusCode: 200, 
      message: currency
    }

  }

  // Endpoint for returning the available currency codes for conversion to the client.
  // Exemple: http://localhost:3000/convert/currencies
  @Get('currencies')  
  currencies(): Message {

    return { 
      statusCode: 200, 
      message: currencyNames
    }

  }

}
