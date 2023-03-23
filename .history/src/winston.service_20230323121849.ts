import { Injectable } from '@nestjs/common';
import { WinstonModule, WinstonModuleOptions, WinstonModuleOptionsFactory } from 'nest-winston';
import * as winston from 'winston';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WinstonLoggerService {
  constructor(
    private readonly configService: ConfigService,
    private readonly winstonModule: WinstonModule
  ) {}

  createLogger() {
    const env = this.configService.get('NODE_ENV');
    const level = env === 'production' ? 'info' : 'debug';

    return winston.createLogger({
      level,
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            winston.format.align(),
            winston.format.printf((info) => {
              const { timestamp, level, message, ...args } = info;
              const ts = timestamp.slice(0, 19).replace('T', ' ');
              return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
            })
          )
        })
      ]
    });
  }
}
