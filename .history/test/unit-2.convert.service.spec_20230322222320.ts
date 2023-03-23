import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Must calculate the conversion rates based on USD.', 
    () => {
      convertService.setCalcRatesProxy();
      const calcRates = convertService.getCalcRates();
      for (const [key, value] of Object.entries(calcRates)) {
        //Key must be a string
        expect(typeof key).toBe('string');
        // Value must be a numeric string
        expect(typeof value).toBe('string');
        expect(Number(value)).not.toBeNaN();
      }
    }
  );
});

