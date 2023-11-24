import {
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Body,
  Put,
  UseGuards,
} from '@nestjs/common';

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project';
import { UdateProjectDto } from './dto/update-project';
import { Project } from './interfaces/project';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Project> {
    return this.projectsService.FindOne(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProjectDto): Promise<Project> {
    return this.projectsService.create(createProductDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UdateProjectDto,
  ): Promise<Project> {
    return this.projectsService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Project> {
    return this.projectsService.remove(id);
  }
}
