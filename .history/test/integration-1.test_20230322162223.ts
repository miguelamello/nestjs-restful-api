import env from './env-config';

describe('GET /', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/`;

  it(
    `
      *** Integration Testing ***

      This endpoint must returns an html containing the complete 
      microservice documentation.
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.text();
      console.log(responseBody);
      
      expect(response.status).toBe(200);
      expect(responseBody.startsWith('<!DOCTYPE html>')).toBeTruthy();
    }
  );
  
});
