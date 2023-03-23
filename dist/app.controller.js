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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
const fs_1 = require("fs");
const path_1 = require("path");
let AppController = class AppController {
    constructor(logger) {
        this.logger = logger;
    }
    getDocumentation() {
        const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), 'documentation.html'));
        return new common_1.StreamableFile(file);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Content-Type', 'text/html'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", common_1.StreamableFile)
], AppController.prototype, "getDocumentation", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('winston')),
    __metadata("design:paramtypes", [winston_1.Logger])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map