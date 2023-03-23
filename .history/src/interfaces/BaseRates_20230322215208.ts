
interface BaseRates {
  disclaimer: string; 
  license: string;
  timestamp: number;
  base: string;
  rates: { 
    [key: string]: string;
  }
}

export default BaseRates;
