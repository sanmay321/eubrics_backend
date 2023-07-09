import { Injectable } from '@nestjs/common';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Health } from './entities/health.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HealthService {

  constructor(
    @InjectRepository(Health)
    private healthRepository: Repository<Health>,
  ) { }

  create(createHealthDto: CreateHealthDto) {

    const health=new Health();

    health.userId=createHealthDto.userId;
    health.todo=createHealthDto.todo;
    health.lastUpdate=createHealthDto.lastUpdate;
    health.id=100;

    return this.healthRepository.save(health);
  }

  findAll() {
    return this.healthRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} health`;
  }

  findHealthUser(userId: string) {
    return this.healthRepository.find({
      where:{
        userId:userId
      }
    });
  }

  update(id: number, updateHealthDto: UpdateHealthDto) {
    const health=new Health();
    health.id=id;
    health.completed=updateHealthDto.completed;
    health.lastUpdate-updateHealthDto.lastUpdate;
    health.todo=updateHealthDto.todo;
    health.userId=updateHealthDto.userId;
    return this.healthRepository.save(health);
  }

  remove(id: number) {
    return this.healthRepository.delete(id);
  }
}
