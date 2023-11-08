import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: '1',
      message: 'Buenas',
    },
  ];

  getPosts() {
    return this.posts;
  }

  getPost(id: string): Post {
    return this.posts.find((item) => item.id === id);
  }

  createPost(message: string): void {
    this.posts.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }

  updatePost(id: string, message: string): void {
    const post: Post = this.getPost(id);
    if (post) {
      post.message = message;
    }
  }

  deletePost(id: string): void {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
  }
}
