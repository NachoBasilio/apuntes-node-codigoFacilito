import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}
  usuarios = [
    {
      id: 1,
      nombre: 'Juan',
      apellido: 'Gomez',
      direccion: 'Calle 123, Ciudad XYZ',
      estado_civil: 'Soltero',
      pokemon_favorito: 'Pikachu',
    },
    {
      id: 2,
      nombre: 'Maria',
      apellido: 'Rodriguez',
      direccion: 'Avenida ABC, Ciudad ABC',
      estado_civil: 'Casado',
      pokemon_favorito: 'Charizard',
    },
    {
      id: 3,
      nombre: 'Carlos',
      apellido: 'Lopez',
      direccion: 'Carrera 456, Ciudad LMN',
      estado_civil: 'Soltero',
      pokemon_favorito: 'Bulbasaur',
    },
    {
      id: 4,
      nombre: 'Ana',
      apellido: 'Martinez',
      direccion: 'Calle 789, Ciudad PQR',
      estado_civil: 'Casado',
      pokemon_favorito: 'Squirtle',
    },
    {
      id: 5,
      nombre: 'Pedro',
      apellido: 'Sanchez',
      direccion: 'Avenida XYZ, Ciudad LMN',
      estado_civil: 'Divorciado',
      pokemon_favorito: 'Eevee',
    },
  ];

  getUsers() {
    return this.usuarios;
  }

  getUsersQTY() {
    return this.usuarios.length;
  }

  getUsersById(id) {
    const usuario = this.usuarios.find((user) => user.id == id);

    if (!id) {
      throw new BadRequestException('No hay ID');
    }

    if (usuario) {
      return usuario;
    } else {
      throw new NotFoundException('Ese valor no ta');
    }
  }

  getPokemonByName(name) {
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  addUser(nombre, apellido, direccion, estado_civil, pokemon_favorito) {
    const ultimoID = this.usuarios[this.usuarios.length - 1].id + 1;

    if (
      !nombre ||
      !apellido ||
      !direccion ||
      !estado_civil ||
      !pokemon_favorito
    ) {
      throw new BadRequestException('Faltan datos');
    }

    const nuevoUsuario = {
      id: ultimoID,
      nombre,
      apellido,
      direccion,
      estado_civil,
      pokemon_favorito,
    };

    this.usuarios.push(nuevoUsuario);

    return this.usuarios;
  }
}
