import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { Message } from '../interfaces/message.interface';
import BaseRates from '../interfaces/BaseRates';
import CalcRate from '../interfaces/CalcRate';
import sampleData from './sample-data';
import emptyBaserate from './empty-baserate';
import currencyCodes from './currency-codes';
import currencyNames from './currency-names';

@Controller('convert')
export class ConvertController {

  // Open Exchange Rates account ID
  private openExchangeRatesApiKey = '147b750303264e2fa9de9af6d03974aa';

  // Base rate for the conversion
  private baseRates: BaseRates = emptyBaserate; 

  // Calculated rates for the conversion
  private calcRates: CalcRate = {};

  // Timer to update the base rates
  private baseRatesMonitor: NodeJS.Timeout | null = null;

  // Set sample data
  private sampleData = sampleData;

  // Initialize some variables
  constructor() {

    // Get the base rates from the remote API
    /*this.getRemoteBaseRates().then((rates) => {
      this.setBaseRates(rates);
      this.setCalcRates();
      this.updateRemoteBaseRates();
    });*/

    // Sample Data for testing porpuses
    const rates = this.getSampledata();
    this.setBaseRates(rates);

  } 

  // Set the base rates
  private setBaseRates( rates: BaseRates ) {
    this.baseRates = rates;
  }

  // Get the base rates
  private getBaseRates() { 
    return this.baseRates;
  }

  // Get sample exchange rates.
  private async getSampledata() {
    return this.sampleData;
  }

  // Get the latest exchange rates available from the Open Exchange Rates API.
  private async getRemoteBaseRates(): Promise<BaseRates> {
    const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${this.openExchangeRatesApiKey}`);
    return await response.json();
  }

  // Get the latest exchange rates available from the Open Exchange Rates API.
  private updateRemoteBaseRates() {
    this.baseRatesMonitor = setInterval(() => {
      this.getRemoteBaseRates().then((rates) => {
        this.setBaseRates( rates );
        this.setCalcRates();
      });
    }, 21600000); // 6 hours interval
  }

  // Calculate the conversion rates based on USD.
  private setCalcRates() {
    const baseRates = this.getBaseRates();
    if ( baseRates.timestamp ) {
      for (const [key1, value1] of Object.entries(baseRates.rates)) {
        this.calcRates[key1] = {};
        this.calcRates[key1][key1] = 1.00;
        for (const [key2, value2] of Object.entries(baseRates.rates)) {
          if ( key1 === 'USD') {
            this.calcRates[key1][key2] = +(value2).toFixed(2) || 0; 
          } else {
            if ( key2 == 'USD') {
              this.calcRates[key1][key2] = +(1 / value1).toFixed(2) || 0; 
            } else {
              this.calcRates[key1][key2] = +((1 / value1) * value2).toFixed(2) || 0;
            }
          }
        }
      }
    }
  }

  // Get the calculated rates
  private getCalcRates() {
    return this.calcRates;
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
