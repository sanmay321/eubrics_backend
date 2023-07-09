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
exports.ProgrammingController = void 0;
const common_1 = require("@nestjs/common");
const programming_service_1 = require("./programming.service");
const create_programming_dto_1 = require("./dto/create-programming.dto");
const update_programming_dto_1 = require("./dto/update-programming.dto");
const swagger_1 = require("@nestjs/swagger");
let ProgrammingController = exports.ProgrammingController = class ProgrammingController {
    constructor(programmingService) {
        this.programmingService = programmingService;
    }
    create(createProgrammingDto) {
        return this.programmingService.create(createProgrammingDto);
    }
    findAll() {
        return this.programmingService.findAll();
    }
    findOne(id) {
        return this.programmingService.findOne(+id);
    }
    update(id, updateProgrammingDto) {
        return this.programmingService.update(+id, updateProgrammingDto);
    }
    remove(id) {
        return this.programmingService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_programming_dto_1.CreateProgrammingDto]),
    __metadata("design:returntype", void 0)
], ProgrammingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProgrammingController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgrammingController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_programming_dto_1.UpdateProgrammingDto]),
    __metadata("design:returntype", void 0)
], ProgrammingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProgrammingController.prototype, "remove", null);
exports.ProgrammingController = ProgrammingController = __decorate([
    (0, swagger_1.ApiTags)('Programming controller'),
    (0, common_1.Controller)('programming'),
    __metadata("design:paramtypes", [programming_service_1.ProgrammingService])
], ProgrammingController);
//# sourceMappingURL=programming.controller.js.map