import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('Must return conversion rates for a given currency and amount', () => {
    const currency = 'EUR';
    const amount = 100;
    const response = convertService.getConversion(currency, amount);
    //StatusCode must be 200
    expect(response.statusCode).toBe(200);
    for (const [key, value] of Object.entries(response.message)) {
      //Key must be a string
      expect(typeof key).toBe('string');
      //Value must be a number
      expect(typeof value).toBe('number');
    }
  });

  it('should return a 204 status code and an error message if the given currency is not available', () => {
    const currency = 'XYZ';
    const amount = 100;
    const response = convertService.getConversion(currency, amount);
  
    expect(response.statusCode).toBe(204);
    expect(response.message).toBe(`Currency ${currency} not found.`);
  });
});

