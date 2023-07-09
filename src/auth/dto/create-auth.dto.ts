import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {

    @ApiProperty()
    public email: string;

    @ApiProperty()
    public name: string;

    @ApiProperty()
    public userId: string;

    @ApiProperty()
    public password: string
}

export class UserCredentials{

    @ApiProperty()
    public email: string;

    @ApiProperty()
    public password: string;
}
