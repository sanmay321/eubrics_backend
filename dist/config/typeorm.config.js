"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const auth_entity_1 = require("../auth/entities/auth.entity");
const communication_entity_1 = require("../communication/entities/communication.entity");
const health_entity_1 = require("../health/entities/health.entity");
const programming_entity_1 = require("../programming/entities/programming.entity");
const sport_entity_1 = require("../sports/entities/sport.entity");
const study_entity_1 = require("../study/entities/study.entity");
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'db-eubrics.cwx6lehtpf0t.ap-south-1.rds.amazonaws.com',
    port: 5432,
    username: 'anik',
    password: 'Anik0810',
    database: 'assignment',
    entities: [auth_entity_1.UserDetails, study_entity_1.Study, sport_entity_1.Sport, programming_entity_1.Programming, health_entity_1.Health, communication_entity_1.Communication],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map