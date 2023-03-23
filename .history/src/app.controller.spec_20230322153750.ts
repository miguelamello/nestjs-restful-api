import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ConvertController } from './convert/convert.controller';
import { ConvertService } from './convert/convert.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, ConvertController],
      providers: [ConvertService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('Should return a message to the client', () => {
      expect(appController.getDocumentation()).toStrictEqual({"message": "Please follow the documentation for usage of the microservice. Basically you can pass the following parameters: /conversion/?from=USD&to=EUR&amount=100&email:myname@domain.com", "statusCode": 200});
    });
  });
});
