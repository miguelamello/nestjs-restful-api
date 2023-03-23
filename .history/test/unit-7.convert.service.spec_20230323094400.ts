import { ConvertService } from '../src/convert/convert.service';

describe('ConvertService', () => {

  let convertService: ConvertService;

  beforeEach(() => {
    convertService = new ConvertService();
  });

  it('*** Unit Testing ***', () => {});

  it('Tests that convertService.setCalcRates updates calcrates.', 
    () => {
      const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject('Network error'));
      await expect(convertService.getRemoteBaseRates()).rejects.toEqual('Network error');
      fetchMock.mockRestore();
    }
  );
});

