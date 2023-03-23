import { Controller, Get } from '@nestjs/common';

@Controller('convert')
export class ConvertController {

  // Endpoint for returning the available currency codes for conversion to the client.
  // Exemple: http://localhost:3000/convert/currencies
  @Get('codes')  
  getCodes(): Message {

    return { 
      statusCode: 200, 
      message: currencyNames
    }
  }

}
