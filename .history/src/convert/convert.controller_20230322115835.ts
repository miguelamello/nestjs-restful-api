import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { Message } from '../interfaces/message.interface';
import BaseRates from '../interfaces/BaseRates';
import CalcRate from '../interfaces/CalcRate';
import emptyBaserate from './empty-baserate';
import currencyCodes from './currency-codes';
import currencyNames from './currency-names';
import { ConvertService } from './convert.service';

@Controller('convert')
export class ConvertController {

  // Initialize some variables
  constructor( private convertService: ConvertService ) {

    

  }

  // Endpoint for converting a given currency to all the other currencies.
  @Get(':currency/:amount')
  convert(
    @Param('currency') currency: string, 
    @Param('amount', ParseFloatPipe) amount: number
  ): Message {
    
    /*return { 
      statusCode: 200, 
      message: currency + ' ' + amount.toFixed(2)
    }*/

    return { 
      statusCode: 200, 
      message: this.getCalcRates()
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
