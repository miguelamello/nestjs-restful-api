import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Test if convertService.getCurrencyNames() returns the calculated rates', 
    () => {
      const currencyNames = convertService.getCurrencyNames();
      expect(currencyNames).toBeDefined();
    }
  );
});

