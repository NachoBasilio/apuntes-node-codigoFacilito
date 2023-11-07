import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  users = [
    {
      id: 1,
      name: "user 1",
      surname: "surname 1",
      age: 20
    },
    {
      id: 2,
      name: "user 2",
      surname: "surname 2",
      age: 20
    },
    {
      id: 3,
      name: "user 3",
      surname: "surname 3",
      age: 20
    },
    {
      id: 4,
      name: "user 4",
      surname: "surname 4",
      age: 20
    },
    {
      id: 5,
      name: "user 5",
      surname: "surname 5",
      age: 20
    }
  ]

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

  @Get("/api/user")
  getUsers(): any {
    return this.users
  }

  @Get("/api/user/qty")
  getUserQty(): any {

    return this.users.length
  }

  @Get("/api/user/:id")
  getUser(@Param() params){
    const id = params.id

    const user = this.users.find(user => user.id == id)
    return user
  }

  @Post("/api/test")
  addUser(@Body() userData: any){
    if(!userData.name || !userData.surname || !userData.age){
      throw new Error("Faltan datos")
    }
    const user = {
      id: this.users.length + 1,
      ...userData
    }
    this.users.push(user)
    return this.users
  }  

}
