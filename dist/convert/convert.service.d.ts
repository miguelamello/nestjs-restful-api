import Message from '../interfaces/message.interface';
import BaseRates from '../interfaces/BaseRates';
import CalcRate from '../interfaces/CalcRate';
import Currencies from '../interfaces/Currencies';
export declare class ConvertService {
    private openExchangeRatesApiKey;
    private baseRates;
    private calcRates;
    private baseRatesMonitor;
    private currencyNames;
    private sampleData;
    constructor();
    private setBaseRates;
    private getBaseRates;
    private getSampledata;
    private useSampleData;
    private getRemoteBaseRates;
    private updateRemoteBaseRates;
    private setCalcRates;
    private doConversion;
    getCalcRates(): CalcRate;
    getCurrencyNames(): Currencies[];
    getConversion(currency: string, amount: number): Message;
    setCalcRatesProxy(): void;
    getRemoteBaseRatesProxy(): Promise<BaseRates>;
}
