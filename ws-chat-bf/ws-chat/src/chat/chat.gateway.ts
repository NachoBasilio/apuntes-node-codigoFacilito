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
      //onsole.log('Cliente conectado', socket.id);
      //Aqui decidimos que hace el cliente mientras esta conectado y que pasa cuando se desconecta.

      const { token, name } = socket.handshake.auth;

      if (!name) {
        socket.disconnect();
        return;
      }

      this.chatService.onClientConnected({ id: socket.id, name: name });

      //socket.emit('welcome-message', 'Welcome to miami');
      this.server.emit('on-clients-changed', this.chatService.getClients());

      socket.on('disconnect', () => {
        //console.log('cliente desconectado', socket.id);
        this.chatService.onClientDisconnected(socket.id);
        this.server.emit('on-clients-changed', this.chatService.getClients());
      });
    });
  }
}
