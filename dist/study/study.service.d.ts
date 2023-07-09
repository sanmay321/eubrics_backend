import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
export declare class StudyService {
    create(createStudyDto: CreateStudyDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateStudyDto: UpdateStudyDto): string;
    remove(id: number): string;
}
