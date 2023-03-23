import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001, 'http://64.225.0.116/() => {
    console.log(`Application is running on: http://localhost:3000`);
  });
}

bootstrap();
