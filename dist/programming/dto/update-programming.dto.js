"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProgrammingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_programming_dto_1 = require("./create-programming.dto");
class UpdateProgrammingDto extends (0, swagger_1.PartialType)(create_programming_dto_1.CreateProgrammingDto) {
}
exports.UpdateProgrammingDto = UpdateProgrammingDto;
//# sourceMappingURL=update-programming.dto.js.map