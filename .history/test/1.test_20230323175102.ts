import env from './env-config';

describe('GET /', () => {

  const endpoint = `${env.protocol}://${env.host}:${env.port}/`;

  it(
    `
      *** Integration Testing ***

      The endpoint must return an html containing the complete 
      microservice documentation.
      
      *** 
        Please verify if the test environment variables in "env-config.ts" 
        matches your setup and also if server is running in background. 
      ***
    `, 
    async () => {
      const response = await fetch(endpoint);
      const responseBody = await response.text();
      //Status code must be 200
      expect(response.status).toBe(200);
      //Response must be an html
      expect(responseBody.startsWith('<!DOCTYPE html>')).toBeTruthy();
    }
  );
  
});
