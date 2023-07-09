import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { Sport } from './entities/sport.entity';
import { Repository } from 'typeorm';
export declare class SportsService {
    private sportRepository;
    constructor(sportRepository: Repository<Sport>);
    create(CreateSportDto: CreateSportDto): Promise<Sport>;
    findAll(): Promise<Sport[]>;
    findOne(id: number): string;
    update(id: number, updateSportDto: UpdateSportDto): string;
    remove(id: number): string;
}
