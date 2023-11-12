import { IsString } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  readonly message: string;
}
