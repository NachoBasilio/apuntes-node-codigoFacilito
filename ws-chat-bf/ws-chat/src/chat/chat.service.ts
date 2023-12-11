import { Injectable } from '@nestjs/common';

// Definición de la interfaz para representar la estructura de un cliente
interface Client {
  id: string;
  name: string;
}

@Injectable()
export class ChatService {
  // Declaración de la variable 'clients' como un objeto con claves de tipo string
  // y valores de tipo 'Client' utilizando el tipo 'Record'
  // El tipo 'Record' es un tipo genérico en TypeScript que representa un objeto
  // con claves de un tipo específico y valores de otro tipo específico.
  // En este caso, las claves son de tipo 'string' y los valores son de tipo 'Client'.

  private clients: Record<string, Client> = {};

  onClientConnected(client: Client) {
    this.clients[client.id] = client;
  }

  onClientDisconnected(id: string) {
    delete this.clients[id];
  }

  getClients(): any {
    return Object.values(this.clients) || [];
  }
}
