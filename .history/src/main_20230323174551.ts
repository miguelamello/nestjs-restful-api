import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const hostname = 'localhost'; 
  await app.listen(3000, hostname, () => {
    console.log(`Application is running on: http://${}:3000`);
  });
}

bootstrap();
