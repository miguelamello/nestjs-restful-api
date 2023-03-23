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

});

