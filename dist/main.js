"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const hostname = 'localhost';
    await app.listen(3000, hostname, () => {
        console.log(`Application is running on: http://${hostname}:3000`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map