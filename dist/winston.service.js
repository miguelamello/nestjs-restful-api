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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinstonLoggerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const winston = require("winston");
let WinstonLoggerService = class WinstonLoggerService {
    constructor(configService) {
        this.configService = configService;
    }
    createWinstonModuleOptions() {
        const env = this.configService.get('NODE_ENV');
        const level = env === 'production' ? 'info' : 'debug';
        return {
            level,
            exitOnError: false,
            transports: [
                new winston.transports.Console({
                    handleExceptions: true,
                    format: winston.format.combine(winston.format.colorize(), winston.format.timestamp(), winston.format.align(), winston.format.printf((info) => {
                        const { timestamp, level, message } = info, args = __rest(info, ["timestamp", "level", "message"]);
                        const ts = timestamp.slice(0, 19).replace('T', ' ');
                        return `${ts} [${level}]: ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
                    }))
                })
            ]
        };
    }
};
WinstonLoggerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], WinstonLoggerService);
exports.WinstonLoggerService = WinstonLoggerService;
//# sourceMappingURL=winston.service.js.map