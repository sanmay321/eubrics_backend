import { CreateCommunicationDto } from './dto/create-communication.dto';
import { UpdateCommunicationDto } from './dto/update-communication.dto';
export declare class CommunicationService {
    create(createCommunicationDto: CreateCommunicationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCommunicationDto: UpdateCommunicationDto): string;
    remove(id: number): string;
}
