import { Injectable } from '@nestjs/common';
import BaseRates from '../interfaces/BaseRates';
import CalcRate from '../interfaces/CalcRate';
import emptyBaserate from './empty-baserate';
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
    this.getSampledata();

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

  private useSampleData() {

    const rates = this.getSampledata();
    this.setBaseRates(rates);
    this.setCalcRates();

  }

}

