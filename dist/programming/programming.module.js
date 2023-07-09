"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammingModule = void 0;
const common_1 = require("@nestjs/common");
const programming_service_1 = require("./programming.service");
const programming_controller_1 = require("./programming.controller");
const typeorm_1 = require("@nestjs/typeorm");
const programming_entity_1 = require("./entities/programming.entity");
let ProgrammingModule = exports.ProgrammingModule = class ProgrammingModule {
};
exports.ProgrammingModule = ProgrammingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([programming_entity_1.Programming])],
        controllers: [programming_controller_1.ProgrammingController],
        providers: [programming_service_1.ProgrammingService]
    })
], ProgrammingModule);
//# sourceMappingURL=programming.module.js.map