import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
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

    if (usuario) {
      return usuario;
    } else {
      return 'Todo mal';
    }
  }
}
