import { AuthService } from './auth.service';
import { CreateAuthDto, UserCredentials } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateAuthDto): Promise<import("./entities/auth.entity").UserDetails>;
    logIn(userCredential: UserCredentials): Promise<import("./entities/auth.entity").UserDetails>;
}
