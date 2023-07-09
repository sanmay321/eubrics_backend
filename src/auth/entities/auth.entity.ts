import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserDetails {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    name: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column()
    password: string;
}