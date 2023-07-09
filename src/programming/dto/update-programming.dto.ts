import { PartialType } from '@nestjs/swagger';
import { CreateProgrammingDto } from './create-programming.dto';

export class UpdateProgrammingDto extends PartialType(CreateProgrammingDto) {
    public completed:boolean
}
