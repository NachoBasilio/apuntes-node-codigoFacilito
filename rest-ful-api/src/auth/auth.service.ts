import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Users } from 'src/types/Users';

@Injectable()
export class AuthService {
  testUser: Users;

  constructor(private jwtService: JwtService) {
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

  login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
