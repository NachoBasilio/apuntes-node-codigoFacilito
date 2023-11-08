import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

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

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() post): string {
    return `El post ${id} fue actualizado: ${post.message}`;
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): string {
    return `El post ${id} fue eliminado`;
  }
}
