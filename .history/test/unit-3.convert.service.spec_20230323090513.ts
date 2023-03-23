import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Test if convertService.getCalcRates() ', 
    () => {
      const calcRates = convertService.getCalcRates();
      expect(calcRates).toBeDefined();
    }
  );
});

