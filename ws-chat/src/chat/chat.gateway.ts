import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server } from 'socket.io';
import { OnModuleInit } from '@nestjs/common';
import { Socket } from 'socket.io';

@WebSocketGateway() //Aqui se puede cambiar el puerto
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
