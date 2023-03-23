import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Tests that convertService.getConversion returns error message for negative amount.', 
    () => {
      const response = convertService.getConversion("USD", -100);
      expect(response.statusCode).toBe(400);
      expect(response.message).toBe("Amount must be a positive number.");
    }
  );
});

