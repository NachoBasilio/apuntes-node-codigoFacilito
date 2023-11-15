import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/users')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('api/users/qty')
  getUsersQTY() {
    return this.appService.getUsersQTY();
  }

  @Get('api/users/:id')
  getUserById(@Param('id') id) {
    return this.appService.getUsersById(id);
  }
}
