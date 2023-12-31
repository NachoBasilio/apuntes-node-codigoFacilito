import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto, UpdatePostDto } from './dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  getPosts() {
    return this.postService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id') id: string) {
    return this.postService.getPost(id);
  }

  @Post()
  createPost(@Body() message: CreatePostDto) {
    return this.postService.createPost(message);
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body('message') message: UpdatePostDto) {
    return this.postService.updatePost(id, message);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): void {
    return this.postService.deletePost(id);
  }
}
