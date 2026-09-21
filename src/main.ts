import { NestFactory } from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
  const app =
    await NestFactory.createMicroservice<MicroserviceOptions>(
      AppModule,
      {
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 4002,
        },
      },
    );

  await app.listen();

  console.log(
    'Notification microservice running on port 4002',
  );
}

bootstrap();