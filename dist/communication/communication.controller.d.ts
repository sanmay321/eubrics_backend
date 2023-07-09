import { CommunicationService } from './communication.service';
import { CreateCommunicationDto } from './dto/create-communication.dto';
import { UpdateCommunicationDto } from './dto/update-communication.dto';
export declare class CommunicationController {
    private readonly communicationService;
    constructor(communicationService: CommunicationService);
    create(createCommunicationDto: CreateCommunicationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCommunicationDto: UpdateCommunicationDto): string;
    remove(id: string): string;
}
