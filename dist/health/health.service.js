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
exports.HealthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const health_entity_1 = require("./entities/health.entity");
const typeorm_2 = require("typeorm");
let HealthService = exports.HealthService = class HealthService {
    constructor(healthRepository) {
        this.healthRepository = healthRepository;
    }
    create(createHealthDto) {
        const health = new health_entity_1.Health();
        health.userId = createHealthDto.userId;
        health.todo = createHealthDto.todo;
        health.lastUpdate = createHealthDto.lastUpdate;
        health.id = 100;
        return this.healthRepository.save(health);
    }
    findAll() {
        return this.healthRepository.find();
    }
    findOne(id) {
        return `This action returns a #${id} health`;
    }
    findHealthUser(userId) {
        return this.healthRepository.find({
            where: {
                userId: userId
            }
        });
    }
    update(id, updateHealthDto) {
        const health = new health_entity_1.Health();
        health.id = id;
        health.completed = updateHealthDto.completed;
        health.lastUpdate = updateHealthDto.lastUpdate;
        health.todo = updateHealthDto.todo;
        health.userId = updateHealthDto.userId;
        return this.healthRepository.save(health);
    }
    remove(id) {
        return this.healthRepository.delete(id);
    }
};
exports.HealthService = HealthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(health_entity_1.Health)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HealthService);
//# sourceMappingURL=health.service.js.map