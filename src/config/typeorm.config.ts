import { DynamicModule } from "@nestjs/common";
import { UserDetails } from "src/auth/entities/auth.entity";
import { Communication } from "src/communication/entities/communication.entity";
import { Health } from "src/health/entities/health.entity";
import { Programming } from "src/programming/entities/programming.entity";
import { Sport } from "src/sports/entities/sport.entity";
import { Study } from "src/study/entities/study.entity";

export const typeOrmConfig:any={
    type: 'postgres',
    host: 'db-eubrics.cwx6lehtpf0t.ap-south-1.rds.amazonaws.com',
    port: 5432,
    username: 'anik',
    password: 'Anik0810',
    database: 'assignment',
    entities: [UserDetails,Study,Sport,Programming,Health,Communication],
    synchronize: true,
}