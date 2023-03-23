import { Injectable } from '@nestjs/common';
import BaseRates from '../interfaces/BaseRates';
import CalcRate from '../interfaces/CalcRate';
import emptyBaserate from './empty-baserate';
import currencyCodes from './currency-codes';
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
  private getBaseRates() { 
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
  getCalcRates() {
    return this.calcRates;
  }

  // Get the currency names for the conversion
  getCurrencyNames() {
    return this.currencyNames;
  }

  // Do the conversion and return the result to the client.
  private doConversion( currency: string, amount: number ) {
    const rate = this.calcRates[currency];
    foreach (const [key, value] of Object.entries(rate)) {

    const calcRates: CalcRate = this.getCalcRates(); 
    const conversion: Conversion = { 
      source_currency: message.from + '', 
      source_value: (+message.amount).toFixed(2) + '', 
      target_currency: message.to + '', 
      target_value: (+calcRates[message.from][message.to] * +message.amount).toFixed(2) + '', 
      conversion_rate: calcRates[message.from][message.to] + '', 
      utc_datetime: new Date().toUTCString(), 
      user_email: message.email
    };
    return conversion; 
  }

  getConversion( currency: string, amount: number ) {
    const response = this.calcRates[currency];
    if ( response ) {
      return { 
        statusCode: 200, 
        message: response
      };
    } else {
      return { 
        statusCode: 204, 
        message: `Currency ${currency} not found.`
      };
    }
  }

}

