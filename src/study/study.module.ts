import { Module } from '@nestjs/common';
import { StudyService } from './study.service';
import { StudyController } from './study.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Study } from './entities/study.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Study])],
  controllers: [StudyController],
  providers: [StudyService]
})
export class StudyModule {}
