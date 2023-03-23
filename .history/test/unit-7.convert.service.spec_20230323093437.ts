import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Tests that convertService.setCalcRates updates calcrates.', 
    () => {
      const calcRatesBefore = convertService.getCalcRates();
      convertService.setCalcRatesProxy();
      const calcRatesAfter = convertService.getCalcRates();
      expect(calcRatesBefore).not.toEqual(calcRatesAfter);
    }
  );
});

