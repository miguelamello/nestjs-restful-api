import { Injectable } from '@nestjs/common';
import sampleData from './sample-data';

@Injectable()
export class ConvertService {

  // Set sample data
  private sampleData: BaseRates = sampleData;


  useSampleData() {



  }

}

