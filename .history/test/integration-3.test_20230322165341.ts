import env from './env-config';
import Currencies from '../src/interfaces/Currencies';

/**
 * Let's test the endpoint that returns the conversion 
 * for the CAD (Canadian Dollar) to all the other currencies.
 * We are passing the amount of 60.00 as a parameter.
 */
describe('GET /convert/CAD/60.00', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/convert/CAD/60.00`;

  it(
    `
      *** Integration Testing ***

      This endpoint must return a JSON with a very specific 
      format in order to match the desired feedback. The file 
      must have a Array of Objects with a single key/value pair 
      representing the currency code and the converted value.
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.json();
      expect(response.status).toBe(200);
      expect(Array.isArray(responseBody.message)).toBe(true);
      if (responseBody.length > 0) {
        responseBody.message.forEach( ( item: Currencies ) => {

          expect(typeof Object.keys(item)[0] === 'string').toBeTruthy();
          expect(typeof Object.values(item)[0] === 'string').toBeTruthy();

        });*/
      }
    }
  );
  
});
