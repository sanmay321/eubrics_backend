import { Module } from '@nestjs/common';
import { ProgrammingService } from './programming.service';
import { ProgrammingController } from './programming.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programming } from './entities/programming.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Programming])],
  controllers: [ProgrammingController],
  providers: [ProgrammingService]
})
export class ProgrammingModule {}
