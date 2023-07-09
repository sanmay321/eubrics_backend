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
exports.HealthController = void 0;
const common_1 = require("@nestjs/common");
const health_service_1 = require("./health.service");
const create_health_dto_1 = require("./dto/create-health.dto");
const update_health_dto_1 = require("./dto/update-health.dto");
const swagger_1 = require("@nestjs/swagger");
let HealthController = exports.HealthController = class HealthController {
    constructor(healthService) {
        this.healthService = healthService;
    }
    create(createHealthDto) {
        return this.healthService.create(createHealthDto);
    }
    findAll() {
        return this.healthService.findAll();
    }
    findOne(userId) {
        return this.healthService.findHealthUser(userId);
    }
    update(id, updateHealthDto) {
        return this.healthService.update(+id, updateHealthDto);
    }
    remove(id) {
        return this.healthService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('addHealth'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_health_dto_1.CreateHealthDto]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('getHealth/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)('updateHealth/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_health_dto_1.UpdateHealthDto]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('deleteHealth/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HealthController.prototype, "remove", null);
exports.HealthController = HealthController = __decorate([
    (0, swagger_1.ApiTags)('health controller'),
    (0, common_1.Controller)('health'),
    __metadata("design:paramtypes", [health_service_1.HealthService])
], HealthController);
//# sourceMappingURL=health.controller.js.map