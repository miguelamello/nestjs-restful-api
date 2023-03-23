import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Must calculate the conversion rates based on USD.', 
    () => {
      const response = convertService.setCalcRatesProxy();
      
    }
  );

  it('Must return a 204 status code and an error message if the given currency is not available', 
    () => {
      const currency = 'XYZ';
      const amount = 100;
      const response = convertService.getConversion(currency, amount);
      expect(response.statusCode).toBe(204);
      expect(response.message).toBe(`Currency ${currency} not found.`);
    }
  );
});

