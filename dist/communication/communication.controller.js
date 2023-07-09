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
exports.CommunicationController = void 0;
const common_1 = require("@nestjs/common");
const communication_service_1 = require("./communication.service");
const create_communication_dto_1 = require("./dto/create-communication.dto");
const update_communication_dto_1 = require("./dto/update-communication.dto");
const swagger_1 = require("@nestjs/swagger");
let CommunicationController = exports.CommunicationController = class CommunicationController {
    constructor(communicationService) {
        this.communicationService = communicationService;
    }
    create(createCommunicationDto) {
        return this.communicationService.create(createCommunicationDto);
    }
    findAll() {
        return this.communicationService.findAll();
    }
    findOne(id) {
        return this.communicationService.findOne(+id);
    }
    update(id, updateCommunicationDto) {
        return this.communicationService.update(+id, updateCommunicationDto);
    }
    remove(id) {
        return this.communicationService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_communication_dto_1.CreateCommunicationDto]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_communication_dto_1.UpdateCommunicationDto]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommunicationController.prototype, "remove", null);
exports.CommunicationController = CommunicationController = __decorate([
    (0, swagger_1.ApiTags)('Communication controller'),
    (0, common_1.Controller)('communication'),
    __metadata("design:paramtypes", [communication_service_1.CommunicationService])
], CommunicationController);
//# sourceMappingURL=communication.controller.js.map