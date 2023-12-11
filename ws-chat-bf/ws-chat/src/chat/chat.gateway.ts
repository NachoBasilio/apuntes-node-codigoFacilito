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
      console.log('Cliente conectado', socket.id);
      //Aqui decidimos que hace el cliente mientras esta conectado y que pasa cuando se desconecta.
      socket.on('disconnect', () => {
        console.log('cliente desconectado', socket.id);
      });
    });
  }
}
