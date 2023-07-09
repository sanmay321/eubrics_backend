import { CreateProgrammingDto } from './create-programming.dto';
declare const UpdateProgrammingDto_base: import("@nestjs/common").Type<Partial<CreateProgrammingDto>>;
export declare class UpdateProgrammingDto extends UpdateProgrammingDto_base {
    completed: boolean;
}
export {};
