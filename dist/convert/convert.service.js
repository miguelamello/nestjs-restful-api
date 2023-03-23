"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertService = void 0;
const common_1 = require("@nestjs/common");
const empty_baserate_1 = require("./empty-baserate");
const currency_names_1 = require("./currency-names");
const sample_data_1 = require("./sample-data");
let ConvertService = class ConvertService {
    constructor() {
        this.openExchangeRatesApiKey = '147b750303264e2fa9de9af6d03974aa';
        this.baseRates = empty_baserate_1.default;
        this.calcRates = {};
        this.baseRatesMonitor = null;
        this.currencyNames = currency_names_1.default;
        this.sampleData = sample_data_1.default;
        this.getRemoteBaseRates().then((rates) => {
            this.setBaseRates(rates);
            this.setCalcRates();
            this.updateRemoteBaseRates();
        });
    }
    setBaseRates(rates) {
        this.baseRates = rates;
    }
    getBaseRates() {
        return this.baseRates;
    }
    getSampledata() {
        return this.sampleData;
    }
    useSampleData() {
        const rates = this.getSampledata();
        this.setBaseRates(rates);
        this.setCalcRates();
    }
    async getRemoteBaseRates() {
        const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${this.openExchangeRatesApiKey}`);
        return await response.json();
    }
    updateRemoteBaseRates() {
        this.baseRatesMonitor = setInterval(() => {
            this.getRemoteBaseRates().then((rates) => {
                this.setBaseRates(rates);
                this.setCalcRates();
            });
        }, 86400000);
    }
    setCalcRates() {
        const baseRates = this.getBaseRates();
        if (baseRates.timestamp) {
            for (const [key1, value1] of Object.entries(baseRates.rates)) {
                this.calcRates[key1] = {};
                for (const [key2, value2] of Object.entries(baseRates.rates)) {
                    if (key1 === 'USD') {
                        this.calcRates[key1][key2] = value2.toFixed(2) || '0.00';
                    }
                    else {
                        if (key2 == 'USD') {
                            this.calcRates[key1][key2] = (1 / value1).toFixed(2) || '0.00';
                        }
                        else {
                            this.calcRates[key1][key2] = ((1 / value1) * value2).toFixed(2) || '0.00';
                        }
                    }
                }
            }
        }
    }
    doConversion(currency, amount) {
        const conversion = {};
        const rate = this.calcRates[currency];
        delete rate[currency];
        for (const [key, value] of Object.entries(rate)) {
            conversion[key] = (+value * amount).toFixed(2);
        }
        return conversion;
    }
    getCalcRates() {
        return this.calcRates;
    }
    getCurrencyNames() {
        return this.currencyNames;
    }
    getConversion(currency, amount) {
        const response = this.calcRates[currency];
        if (response) {
            if (amount <= 0) {
                return {
                    statusCode: 400,
                    message: 'Amount must be a positive number.'
                };
            }
            return {
                statusCode: 200,
                message: this.doConversion(currency, amount)
            };
        }
        return {
            statusCode: 204,
            message: `Currency ${currency} not found.`
        };
    }
    setCalcRatesProxy() {
        this.setCalcRates();
    }
    async getRemoteBaseRatesProxy() {
        const rates = await this.getRemoteBaseRates();
        return rates;
    }
};
ConvertService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConvertService);
exports.ConvertService = ConvertService;
//# sourceMappingURL=convert.service.js.map