import env from './env-config';

describe('GET /currencies', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/`;

  it(
    `
      *** Integration Testing ***

      This endpoint must returns a JSON with a very specific 
      format in order to match the desired .
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.text();
      expect(response.status).toBe(200);
      expect(responseBody.startsWith('<!DOCTYPE html>')).toBeTruthy();
    }
  );
  
});
