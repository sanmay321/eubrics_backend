"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCommunicationDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_communication_dto_1 = require("./create-communication.dto");
class UpdateCommunicationDto extends (0, swagger_1.PartialType)(create_communication_dto_1.CreateCommunicationDto) {
}
exports.UpdateCommunicationDto = UpdateCommunicationDto;
//# sourceMappingURL=update-communication.dto.js.map