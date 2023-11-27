import {
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Body,
  Put,
  UseGuards,
  UseFilters,
  HttpException,
} from '@nestjs/common';

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project';
import { UdateProjectDto } from './dto/update-project';
import { Project } from './interfaces/project';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { HttpExceptionFilter } from 'src/exception-filter';

@Controller('projects')
@UseFilters(new HttpExceptionFilter())
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
    if (!createProductDto) {
      throw new HttpException('No estan los datos necesario', 2000);
    }
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
