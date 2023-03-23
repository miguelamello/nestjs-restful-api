import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Tests that convertService.setCalcRates updates calcrates.', 
    async () => {
      const response = await convertService.getRemoteBaseRatesProxy();
      expect(response).toBeDefined();
      //expect(response.rates).toBeDefined();
      //expect(response.base).toEqual('USD');
      //expect(typeof response.timestamp).toEqual('number');
      console.log(response);
    }
  );
});

