import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateHealthDto } from './create-health.dto';

export class UpdateHealthDto extends PartialType(CreateHealthDto) {

    @ApiProperty()
    public completed:boolean
}