import { ApiProperty } from "@nestjs/swagger";

export class CreateStudyDto {

    @ApiProperty()
    public userId:string;

    @ApiProperty()
    public todo:string;

    @ApiProperty()
    public lastUpdate:number;

    @ApiProperty({default:false})
    public completed:boolean;
}
