import { Injectable } from '@nestjs/common';
import { Users } from 'src/types/Users';

@Injectable()
export class AuthService {
  testUser: Users;

  constructor() {
    this.testUser = {
      id: 1,
      name: 'Nacho',
      password: 'ReNacho',
    };
  }
  //ACA TRAEMOS A MONGO
  validateUser(username: string, password: string) {
    if (
      this.testUser.name === username &&
      this.testUser.password === password
    ) {
      return { userId: this.testUser.id, name: this.testUser.name };
    }
  }
}
