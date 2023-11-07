import { Controller, Get, Param } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getPosts() {
    return 'Hola gente';
  }

  @Get(':id')
  getPost(@Param() params) {
    return `Tu post id es ${params.id}`;
  }
}
