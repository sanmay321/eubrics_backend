import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Study {
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