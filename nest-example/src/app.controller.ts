import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/items')
  getItems(@Query("esPar") esPar, @Query("test") test ): any {
    return{esPar, test}
  }

  @Get("/api/items/:id")
  getItem(@Param() params): any {//Esto se usa para obtener los parametros de la url
    const id = params.id
    const items = [
      {id: 1, name: "item 1"},
      {id: 2, name: "item 2"},
      {id: 3, name: "item 3"},
    ]

    const item = items.find(item => item.id == id)
    return item
  }
}
