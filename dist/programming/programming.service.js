"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgrammingService = void 0;
const common_1 = require("@nestjs/common");
let ProgrammingService = exports.ProgrammingService = class ProgrammingService {
    create(createProgrammingDto) {
        return 'This action adds a new programming';
    }
    findAll() {
        return `This action returns all programming`;
    }
    findOne(id) {
        return `This action returns a #${id} programming`;
    }
    update(id, updateProgrammingDto) {
        return `This action updates a #${id} programming`;
    }
    remove(id) {
        return `This action removes a #${id} programming`;
    }
};
exports.ProgrammingService = ProgrammingService = __decorate([
    (0, common_1.Injectable)()
], ProgrammingService);
//# sourceMappingURL=programming.service.js.map