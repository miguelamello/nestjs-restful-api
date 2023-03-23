import { ConfigService } from '@nestjs/config';
import { WinstonModuleOptions, WinstonModuleOptionsFactory } from 'nest-winston';
export declare class WinstonLoggerService implements WinstonModuleOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createWinstonModuleOptions(): WinstonModuleOptions;
}
