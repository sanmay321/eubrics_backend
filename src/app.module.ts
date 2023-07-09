import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { StudyModule } from './study/study.module';
import { HealthModule } from './health/health.module';
import { SportsModule } from './sports/sports.module';
import { CommunicationModule } from './communication/communication.module';
import { ProgrammingModule } from './programming/programming.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), StudyModule, HealthModule, SportsModule, CommunicationModule, ProgrammingModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
