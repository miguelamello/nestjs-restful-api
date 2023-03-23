import { Controller, Get } from '@nestjs/common';
import { Message } from '../interfaces/message.interface';
import currencyCodes from '../convert/currency-codes';
import currencyNames from '../convert/currency-names';

@Controller('convert')
export class ConvertController {

  // Endpoint for returning the available currency codes for conversion to the client.
  // Exemple: http://localhost:3000/convert/currencies
  @Get('codes')  
  getC(): Message {

    return { 
      statusCode: 200, 
      message: currencyNames
    }
  }

}
