import env from './env-config';
import Currencies from '../src/interfaces/Currencies';

/**
 * Let's test the endpoint for a invalid amount.
 * We are passing the amount of xxx as a parameter.
 */
describe('GET /convert/JPY/xxx', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/convert/JPY/xxx`;

  it(
    `
      *** Integration Testing ***

      This endpoint must return a JSON object literal similar to this:
      {"statusCode":400,"message":"Validation failed (numeric string is expected)","error":"Bad Request"}
      
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
      //responseBody.statusCode must be 400
      expect(responseBody.statusCode).toBe(400);
      //responseBody.message must be a string
      expect(typeof responseBody.message).toBe('string');
      //responseBody.message must be "Currency CAY not found."
      expect(responseBody.message).toBe('Validation failed (numeric string is expected)');
    }
  );
  
});
