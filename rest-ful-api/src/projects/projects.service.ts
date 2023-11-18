import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schemas/project.schema';
import { CreateProjectDto } from './dto/create-project';
import { UdateProjectDto } from './dto/update-project';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private ProjectModel: Model<Project>,
  ) {}

  async findAll(): Promise<Project[]> {
    return this.ProjectModel.find().lean();
  }

  async FindOne(id: string): Promise<Project> {
    return this.ProjectModel.findById({ _id: id }).lean();
  }

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProduct = new this.ProjectModel(createProjectDto);
    return createdProduct.save();
  }

  async update(
    id: string,
    updateProjectDto: UdateProjectDto,
  ): Promise<Project> {
    return this.ProjectModel.updateOne({ _id: id }, updateProjectDto).lean();
  }

  async remove(id: string): Promise<Project> {
    return this.ProjectModel.deleteOne({ _id: id }).lean();
  }
}
