import { Logger } from 'winston';
import { ConvertService } from './convert.service';
import Message from '../interfaces/message.interface';
export declare class ConvertController {
    private convertService;
    private readonly logger;
    constructor(convertService: ConvertService, logger: Logger);
    convert(currency: string, amount: number): Message;
    currencies(): Message;
}
