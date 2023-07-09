import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserDetails } from './entities/auth.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: Repository<UserDetails>);
    create(createAuthDto: CreateAuthDto): Promise<UserDetails>;
    findAll(): string;
    findOne(id: number): string;
    login(email: string, password: string): Promise<UserDetails>;
    findByEmail(email: string): Promise<UserDetails>;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
