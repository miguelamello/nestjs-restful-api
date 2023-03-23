import { Test } from '@nestjs/testing';
import { AppController } from './app.controller';
import { createReadStream } from 'fs';
import { StreamableFile } from '@nestjs/common';
import path from 'path';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getDocumentation', () => {
    it('should return a StreamableFile', () => {
      const result = appController.getDocumentation();
      expect(result).toBeInstanceOf(StreamableFile);
    });

    it('should return a file with the correct content type', () => {
      const result = appController.getDocumentation();
      const headers = result.getHeaders();
      console.log();
      expect(headers['content-type']).toEqual('text/html');
    });

    /*it('should return a file with the correct content', () => {
      const result = appController.getDocumentation();
      const fileStream = result.getStream();
      let fileContent = '';

      fileStream.on('data', (chunk) => {
        fileContent += chunk;
      });

      fileStream.on('end', () => {
        const expectedContent = createReadStream(
          path.join(process.cwd(), 'documentation.html'),
        );
        let expectedContentString = '';

        expectedContent.on('data', (chunk) => {
          expectedContentString += chunk;
        });

        expectedContent.on('end', () => {
          expect(fileContent).toEqual(expectedContentString);
        });
      });
    });*/
  });
});
