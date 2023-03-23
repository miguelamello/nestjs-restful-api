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

      This endpoint must return a JSON object .
      
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
      //responseBody.message must be an object
      expect(typeof responseBody.message).toBe('object');
      const messageString = JSON.stringify(responseBody.message);
      const messageSizeInBytes = Buffer.byteLength(messageString, 'utf8');
      //responseBody.message must have at least one key/value pair
      expect(messageSizeInBytes).toBeGreaterThan(0);
      if (messageSizeInBytes > 0) {
        for (const key in responseBody.message) {
          if (Object.prototype.hasOwnProperty.call(responseBody.message, key)) {
            const value = responseBody.message[key];
            //Each item must contain a string as key and a number as value
            expect(typeof key === 'string').toBeTruthy();
            expect(typeof parseFloat(value) === 'number').toBeTruthy();
          }
        }
      }
    }
  );
  
});
