import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDetails } from './entities/auth.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(UserDetails)
    private usersRepository: Repository<UserDetails>,
  ) { }

  async create(createAuthDto: CreateAuthDto) {

    const existingUser = await this.findByEmail(createAuthDto.email);

    if (existingUser) {
      throw new HttpException('user already there', HttpStatus.CONFLICT);
    }
    else {
      const user = new UserDetails();
      user.email = createAuthDto.email;
      user.name = createAuthDto.name;
      user.password = createAuthDto.password;
      user.userId = createAuthDto.userId;
      user.id = 10;
      return this.usersRepository.save(user);
    }

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  async login(email:string,password:string){
    const user= await this.usersRepository.findOne({
      where:{
        email:email,
        password:password
      }
    })
    if(user){
      return user;
    }
    else{
      throw new HttpException('login failed', HttpStatus.BAD_REQUEST);
    }
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: {
        email: email
      }
    })
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
