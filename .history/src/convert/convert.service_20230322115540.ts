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

    const rates = this.getSampledata();
    this.setBaseRates(rates);
    this.setCalcRates();

  }
  

  // Get sample exchange rates.
  private getSampledata(): BaseRates {
    return this.sampleData;
  }

  useSampleData() {



  }

}

