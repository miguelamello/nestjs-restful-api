import env from './env-config';
import Currencies from '../src/interfaces/Currencies';

/**
 * Let's test the endpoint for a invalid currency code.
 * We are passing the amount of 60.00 as a parameter.
 */
describe('GET /convert/CAY/60.00', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/convert/CAY/60.00`;

  it(
    `
      *** Integration Testing ***

      This endpoint must return a JSON object literal similar to this:
      { "statusCode":204, "message":"Currency CAY not found." }
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.json();
      //Status code must be 200
      expect(response.status).toBe(200);
      //responseBody.statusCode must be a number
      expect(typeof responseBody.statusCode).toBe('number');
      //responseBody.message must be a string
      expect(typeof responseBody.message).toBe('string');
    }
  );
  
});
