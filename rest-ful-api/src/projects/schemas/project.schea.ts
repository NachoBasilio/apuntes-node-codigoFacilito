import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

// @Schema({ timestamps: true })
@Schema()
export class Project {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;

  @Prop({ type: String, required: true })
  urlIMG: string;

  @Prop({ type: [String], required: true })
  Technology: string[];
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
