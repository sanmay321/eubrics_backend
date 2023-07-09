import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  UserDetails } from './entities/auth.entity';


@Module({
  imports:[TypeOrmModule.forFeature([UserDetails])],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
