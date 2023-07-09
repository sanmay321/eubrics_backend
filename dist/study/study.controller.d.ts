import { StudyService } from './study.service';
import { CreateStudyDto } from './dto/create-study.dto';
import { UpdateStudyDto } from './dto/update-study.dto';
export declare class StudyController {
    private readonly studyService;
    constructor(studyService: StudyService);
    create(createStudyDto: CreateStudyDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateStudyDto: UpdateStudyDto): string;
    remove(id: string): string;
}
