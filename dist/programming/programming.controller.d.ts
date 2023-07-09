import { ProgrammingService } from './programming.service';
import { CreateProgrammingDto } from './dto/create-programming.dto';
import { UpdateProgrammingDto } from './dto/update-programming.dto';
export declare class ProgrammingController {
    private readonly programmingService;
    constructor(programmingService: ProgrammingService);
    create(createProgrammingDto: CreateProgrammingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProgrammingDto: UpdateProgrammingDto): string;
    remove(id: string): string;
}
