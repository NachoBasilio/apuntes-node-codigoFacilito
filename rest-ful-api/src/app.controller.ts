import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { firstValueFrom } from 'rxjs';

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

  @Post('api/users')
  createUsers(@Body() userData: any): any {
    const { nombre, apellido, direccion, estado_civil, pokemon_favorito } =
      userData;

    return this.appService.addUser(
      nombre,
      apellido,
      direccion,
      estado_civil,
      pokemon_favorito,
    );
  }

  @Get('api/pokemon/:name')
  async getPokemon(@Param('name') pokemon): Promise<any> {
    const { data } = await firstValueFrom(
      await this.appService.getPokemonByName(pokemon),
    );
    return data;
  }
}
