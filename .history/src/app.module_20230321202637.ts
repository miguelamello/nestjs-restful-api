import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
//import { ConversionController } from './conversion/conversion.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [],
})

export class AppModule {}
