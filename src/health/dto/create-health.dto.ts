import { ApiProperty } from "@nestjs/swagger";

export class CreateHealthDto {

    @ApiProperty()
    public userId:string;

    @ApiProperty()
    public todo:string;

    @ApiProperty()
    public lastUpdate:number;
}
