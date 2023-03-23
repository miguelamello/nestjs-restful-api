import { Injectable } from '@nestjs/common';
import BaseRates from '../interfaces/BaseRates';
import sampleData from './sample-data';

@Injectable()
export class ConvertService {

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

