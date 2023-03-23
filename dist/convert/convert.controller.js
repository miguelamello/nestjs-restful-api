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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvertController = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const convert_service_1 = require("./convert.service");
let ConvertController = class ConvertController {
    constructor(convertService, logger) {
        this.convertService = convertService;
        this.logger = logger;
    }
    convert(currency, amount) {
        return this.convertService.getConversion(currency, amount);
    }
    currencies() {
        return {
            statusCode: 200,
            message: this.convertService.getCurrencyNames()
        };
    }
};
__decorate([
    (0, common_1.Get)(':currency/:amount'),
    __param(0, (0, common_1.Param)('currency')),
    __param(1, (0, common_1.Param)('amount', common_1.ParseFloatPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], ConvertController.prototype, "convert", null);
__decorate([
    (0, common_1.Get)('currencies'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ConvertController.prototype, "currencies", null);
ConvertController = __decorate([
    (0, common_1.Controller)('convert'),
    __param(1, (0, common_1.Inject)('winston')),
    __metadata("design:paramtypes", [convert_service_1.ConvertService,
        winston_1.Logger])
], ConvertController);
exports.ConvertController = ConvertController;
//# sourceMappingURL=convert.controller.js.map