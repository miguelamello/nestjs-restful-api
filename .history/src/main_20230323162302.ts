import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as os from 'os';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let url;
  if (os.hostname() === 'localhost') {
    url = 'http://localhost:3000';
  } else {
    url = 'http://64.225.0.116:3000';
  }
  await app.listen(3000, url);
}

bootstrap();
