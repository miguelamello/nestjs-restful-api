
interface BaseRates {
  disclaimer: string; 
  license: string;
  timestamp: number;
  base: string;
  rates: { 
    [key: string]: number;
  }
}

export default BaseRates;
