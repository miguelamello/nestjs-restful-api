import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModuleOptions, WinstonModuleOptionsFactory } from 'nest-winston';
import * as winston from 'winston';

@Injectable()
export class WinstonLoggerService implements WinstonModuleOptionsFactory {

  constructor(private readonly configService: ConfigService) {}

  createWinstonModuleOptions(): WinstonModuleOptions {

    const env = this.configService.get('NODE_ENV');
    const level = env === 'production' ? 'info' : 'debug';

    return {
      level, 
      exitOnError: false, // Do not exit on handled exceptions
      transports: [
        new winston.transports.Console({
          handleExceptions: true, // Handle exceptions
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
    };
  }
}
