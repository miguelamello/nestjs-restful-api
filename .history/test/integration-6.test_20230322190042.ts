import env from './env-config';

/**
 * Let's test the endpoint with no amount.
 */
describe('GET /convert/USD', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/convert/USD`;

  it(
    `
      *** Integration Testing ***

      This endpoint must return a JSON object literal similar to this:
      {"statusCode":404,"message":"Cannot GET /convert/USD","error":"Not Found"}
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.json();
      //Status code must be 404
      expect(response.status).toBe(404);
      //responseBody.statusCode must be a number
      expect(typeof responseBody.statusCode).toBe('number');
      //responseBody.statusCode must be 404
      expect(responseBody.statusCode).toBe(404);
      //responseBody.message must be a string
      expect(typeof responseBody.message).toBe('string');
      //responseBody.message must be "Currency CAY not found."
      expect(responseBody.message).toBe('Cannot GET /convert/USD');
    }
  );
  
});
