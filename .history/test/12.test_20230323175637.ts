import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Test if convertService.getCurrencyNames() returns the currency names.', 
    () => {
      const currencyNames = convertService.getCurrencyNames();
      expect(currencyNames).toBeDefined();
    }
  );
});

