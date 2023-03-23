import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { ConvertController } from './convert/convert.controller';
import { Conver}

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, ConvertController],
      providers: [AwsSqsService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return a message to the client', () => {
      expect(appController.getHello()).toStrictEqual({"message": "Please follow the documentation for usage of the microservice. Basically you can pass the following parameters: /conversion/?from=USD&to=EUR&amount=100&email:myname@domain.com", "statusCode": 200});
    });
  });
});
