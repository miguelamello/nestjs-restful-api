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

    expect(response.statusCode).toBe(200);
    expect(response.message).toHaveProperty('USD');
    expect(response.message).toHaveProperty('GBP');
    expect(response.message).toHaveProperty('EUR');
  });
});

