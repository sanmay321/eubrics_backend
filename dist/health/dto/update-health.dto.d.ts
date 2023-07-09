import { CreateHealthDto } from './create-health.dto';
declare const UpdateHealthDto_base: import("@nestjs/common").Type<Partial<CreateHealthDto>>;
export declare class UpdateHealthDto extends UpdateHealthDto_base {
    completed: boolean;
}
export {};
