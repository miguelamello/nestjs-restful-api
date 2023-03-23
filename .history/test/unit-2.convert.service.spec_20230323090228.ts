import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  // Tests that getcalcrates returns calculated rates. tags: [happy path]
  test("test_get_calc_rates", () => {
    const convertService = new ConvertService();
    const calcRates = convertService.getCalcRates();
    expect(calcRates).toBeDefined();
  });

  it('Must calculate the conversion rates based on USD.', 
    () => {
      convertService.setCalcRatesProxy();
      const calcRates = convertService.getCalcRates();
      for (const [key, value] of Object.entries(calcRates['USD'])) {
        //Key must be a string
        expect(typeof key).toBe('string');
        // Value must be a numeric string
        expect(typeof value).toBe('string');
        expect(Number(value)).not.toBeNaN();
      }
    }
  );
});

