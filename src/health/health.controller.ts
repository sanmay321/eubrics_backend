import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthDto } from './dto/create-health.dto';
import { UpdateHealthDto } from './dto/update-health.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('health controller')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post('addHealth')
  create(@Body() createHealthDto: CreateHealthDto) {
    return this.healthService.create(createHealthDto);
  }

  @Get('getAll')
  findAll() {
    return this.healthService.findAll();
  }

  @Get('getHealth/:userId')
  findOne(@Param('userId') userId: string) {
    return this.healthService.findHealthUser(userId);
  }

  @Patch('updateHealth/:id')
  update(@Param('id') id: string, @Body() updateHealthDto: UpdateHealthDto) {
    return this.healthService.update(+id, updateHealthDto);
  }

  @Delete('deleteHealth/:id')
  remove(@Param('id') id: string) {
    return this.healthService.remove(+id);
  }
}
