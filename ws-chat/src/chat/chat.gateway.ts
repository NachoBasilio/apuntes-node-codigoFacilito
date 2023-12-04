import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server } from 'http';
import { OnModuleInit } from '@nestjs/common';
import { Socket } from 'dgram';

@WebSocketGateway()
export class ChatGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) {}

  onModuleInit() {
    this.server.on('connection', (socket: Socket) => {
      console.log('Cliente conectado');

      socket.on('disconnect', () => {
        console.log('cliente desconectado');
      });
    });
  }
}
