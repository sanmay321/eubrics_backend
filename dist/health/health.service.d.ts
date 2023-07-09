import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { Health } from './entities/health.entity';
import { Repository } from 'typeorm';
export declare class HealthService {
    private healthRepository;
    constructor(healthRepository: Repository<Health>);
    create(createHealthDto: CreateHealthDto): Promise<Health>;
    findAll(): Promise<Health[]>;
    findOne(id: number): string;
    findHealthUser(userId: string): Promise<Health[]>;
    update(id: number, updateHealthDto: UpdateHealthDto): Promise<Health>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
