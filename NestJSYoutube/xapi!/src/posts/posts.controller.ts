import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get()
  getPosts() {
    return 'Hola gente';
  }

  @Get(':id')
  getPost(@Param('id') id: string): string {
    return `Tu post id es ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createPost(@Body('message') message: string): string {
    return `Tu post es: ${message}`;
  }
}
