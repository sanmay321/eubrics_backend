import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Communication {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    todo:string;

    @Column()
    lastUpdate:number;

    @Column({default:false})
    completed:boolean
}
