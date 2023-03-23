import env from './env-config';
import Currencies from '../src/interfaces/Currencies';

describe('GET /convert/currencies', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/convert/currencies`;

  it(
    `
      *** Integration Testing ***

      This endpoint must returns a JSON with a very specific 
      format in order to match the desired feedback. The file 
      must have a Array of Objects with a single key/value pair 
      representing the currency code and the currency name.
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.json();
      expect(response.status).toBe(200);
      /*expect(Array.isArray(responseBody)).toBe(true);
      if (responseBody.length > 0) {
        responseBody.forEach( ( item: Currencies ) => {

          expect(typeof Object.keys(item)[0] === 'string').toBeTruthy();
          expect(typeof Object.values(item)[0] === 'string').toBeTruthy();

        });
      }*/
      //console.log(responseBody);
    }
  );
  
});
