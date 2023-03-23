import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { Message } from '../interfaces/message.interface';
import BaseRates from '../interfaces/BaseRates';
import currencyCodes from '../convert/currency-codes';
import currencyNames from '../convert/currency-names';

@Controller('convert')
export class ConvertController {

  // Open Exchange Rates account ID
  private openExchangeRatesApiKey = '147b750303264e2fa9de9af6d03974aa';

  // Initialize some variables
  constructor() {

    // Get the base rates from the remote API
    this.getRemoteBaseRates().then((rates) => {
      this.setBaseRates(rates);
      this.setCalcRates();
      this.updateRemoteBaseRates();
    });
  } 

  // Get the latest exchange rates available from the Open Exchange Rates API.
  private async getRemoteBaseRates(): Promise<BaseRates> {
    const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${this.openExchangeRatesApiKey}`);
    return await response.json();
  }

  // Endpoint for converting a given currency to all the other currencies.
  @Get(':currency/:amount')
  convert(
    @Param('currency') currency: string, 
    @Param('amount', ParseFloatPipe) amount: number
  ): Message {
    
    return { 
      statusCode: 200, 
      message: currency + ' ' + amount.toFixed(2)
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
