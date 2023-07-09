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
exports.SportsController = void 0;
const common_1 = require("@nestjs/common");
const sports_service_1 = require("./sports.service");
const create_sport_dto_1 = require("./dto/create-sport.dto");
const update_sport_dto_1 = require("./dto/update-sport.dto");
const swagger_1 = require("@nestjs/swagger");
let SportsController = exports.SportsController = class SportsController {
    constructor(sportsService) {
        this.sportsService = sportsService;
    }
    create(createSportDto) {
        return this.sportsService.create(createSportDto);
    }
    findAll() {
        return this.sportsService.findAll();
    }
    findOne(id) {
        return this.sportsService.findOne(+id);
    }
    update(id, updateSportDto) {
        return this.sportsService.update(+id, updateSportDto);
    }
    remove(id) {
        return this.sportsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)('addsport'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sport_dto_1.CreateSportDto]),
    __metadata("design:returntype", void 0)
], SportsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SportsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SportsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sport_dto_1.UpdateSportDto]),
    __metadata("design:returntype", void 0)
], SportsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SportsController.prototype, "remove", null);
exports.SportsController = SportsController = __decorate([
    (0, swagger_1.ApiTags)('Sports controller'),
    (0, common_1.Controller)('sports'),
    __metadata("design:paramtypes", [sports_service_1.SportsService])
], SportsController);
//# sourceMappingURL=sports.controller.js.map