import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Tests that getconversion returns error message for invalid currency.', 
    () => {
      const response = convertService.getConversion("INVALID", 100);
      expect(response.statusCode).toBe(204);
      expect(response.message).toBe("Currency INVALID not found.");
    }
  );
});

