import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = 'localhost';
  const url = `http://${hostname}:3000`;
  await app.listen(3000, url, () => {
    console.log(`Application is running on: ${url}`);
  });
}

bootstrap();
