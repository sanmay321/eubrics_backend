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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_entity_1 = require("./entities/auth.entity");
const typeorm_2 = require("typeorm");
let AuthService = exports.AuthService = class AuthService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createAuthDto) {
        const existingUser = await this.findByEmail(createAuthDto.email);
        if (existingUser) {
            throw new common_1.HttpException('user already there', common_1.HttpStatus.CONFLICT);
        }
        else {
            const user = new auth_entity_1.UserDetails();
            user.email = createAuthDto.email;
            user.name = createAuthDto.name;
            user.password = createAuthDto.password;
            user.userId = createAuthDto.userId;
            user.id = 10;
            return this.usersRepository.save(user);
        }
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    async login(email, password) {
        const user = await this.usersRepository.findOne({
            where: {
                email: email,
                password: password
            }
        });
        if (user) {
            return user;
        }
        else {
            throw new common_1.HttpException('login failed', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findByEmail(email) {
        return this.usersRepository.findOne({
            where: {
                email: email
            }
        });
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_entity_1.UserDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map