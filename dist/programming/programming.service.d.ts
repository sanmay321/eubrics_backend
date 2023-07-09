import { CreateProgrammingDto } from './dto/create-programming.dto';
import { UpdateProgrammingDto } from './dto/update-programming.dto';
export declare class ProgrammingService {
    create(createProgrammingDto: CreateProgrammingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProgrammingDto: UpdateProgrammingDto): string;
    remove(id: number): string;
}
