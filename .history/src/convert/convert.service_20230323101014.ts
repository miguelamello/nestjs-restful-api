import { Injectable, BadRequestException } from '@nestjs/common';
import Message from '../interfaces/message.interface';
import BaseRates from '../interfaces/BaseRates';
import CalcRate from '../interfaces/CalcRate';
import Currencies from '../interfaces/Currencies';
import Conversion from '../interfaces/Conversion';
import emptyBaserate from './empty-baserate';
import currencyNames from './currency-names';
import sampleData from './sample-data';

@Injectable()
export class ConvertService {

  // Open Exchange Rates account ID
  private openExchangeRatesApiKey = '147b750303264e2fa9de9af6d03974aa';

  // Base rate for the conversion
  private baseRates: BaseRates = emptyBaserate; 

  // Calculated rates for the conversion
  private calcRates: CalcRate = {};

  // Timer to update the base rates
  private baseRatesMonitor: NodeJS.Timeout | null = null;

  // Set the currency names for the conversion
  private currencyNames = currencyNames;

  // Set sample data
  private sampleData: BaseRates = sampleData;

  constructor() {
    // Get the base rates from the remote API
    /*this.getRemoteBaseRates().then((rates) => {
      this.setBaseRates(rates);
      this.setCalcRates();
      this.updateRemoteBaseRates();
    });*/

    // Get the base rates from the sample data
    this.useSampleData();
  }

  // Set the base rates
  private setBaseRates( rates: BaseRates ) {
    this.baseRates = rates;
  }

  // Get the base rates
  private getBaseRates(): BaseRates { 
    return this.baseRates;
  }

  // Get sample exchange rates.
  private getSampledata(): BaseRates {
    return this.sampleData;
  }

  // Set sample exchange rates.
  private useSampleData() {
    const rates = this.getSampledata();
    this.setBaseRates(rates);
    this.setCalcRates();
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
        /*this.calcRates[key1][key1] = 1.00;*/
        for (const [key2, value2] of Object.entries(baseRates.rates)) {
          if ( key1 === 'USD') {
            this.calcRates[key1][key2] = value2.toFixed(2) || '0.00'; 
          } else {
            if ( key2 == 'USD') {
              this.calcRates[key1][key2] = (1 / value1).toFixed(2) || '0.00'; 
            } else {
              this.calcRates[key1][key2] = ((1 / value1) * value2).toFixed(2) || '0.00';
            }
          }
        }
      }
    }
  }

  // Do the conversion and return the result to the client.
  private doConversion( currency: string, amount: number ): Conversion {
    const conversion: Conversion = {};
    const rate = this.calcRates[currency];
    delete rate[currency];
    for (const [key, value] of Object.entries(rate)) {
      conversion[key] = (+value * amount).toFixed(2);
    }
    return conversion; 
  }

  // Get the calculated rates
  getCalcRates(): CalcRate {
    return this.calcRates;
  }

  // Get the currency names for the conversion
  getCurrencyNames(): Currencies[] {
    return this.currencyNames;
  }

  // Get the conversion rates for a given currency and amount 
  // if the currency is available.
  getConversion( currency: string, amount: number ): Message {
    const response = this.calcRates[currency];
    if ( response ) {
      if (amount <= 0) {
        return { 
          statusCode: 400, 
          message: 'Amount must be a positive number.'
        };
      }
      return { 
        statusCode: 200, 
        message: this.doConversion(currency, amount)
      };
    } 
    return { 
      statusCode: 204, 
      message: `Currency ${currency} not found.`
    };
  }

  // Proxy for testing purposes only
  setCalcRatesProxy() {
    this.setCalcRates();
  }

  // Proxy for testing purposes only
  async getRemoteBaseRatesProxy() {
    const promisse = await this.getRemoteBaseRates();
    const rates = await promisse;
  }
}

