import { StreamableFile } from '@nestjs/common';
import { Logger } from 'winston';
export declare class AppController {
    private readonly logger;
    constructor(logger: Logger);
    getDocumentation(): StreamableFile;
}
