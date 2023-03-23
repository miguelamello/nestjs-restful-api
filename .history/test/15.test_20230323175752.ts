import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it(`The method convertService.getRemoteBaseRatesProxy returns a 
  promise that resolves to a BaseRates object.`, 
    async () => {
      const response = await convertService.getRemoteBaseRatesProxy();
      expect(response).toBeDefined();
      expect(response.rates).toBeDefined();
      expect(response.base).toEqual('USD');
      expect(typeof response.timestamp).toEqual('number');
    }
  );
});

