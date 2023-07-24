import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketChatService {
  private socket: Socket;

  constructor() { 
    this.socket = io('http://localhost:3000'); //'URL de votre serveur backend 
  }

  sendMessage(msg: string): void {
    this.socket.emit('chat message', msg);
  }

  onNewMessage(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('chat message', (msg: string) => {
        observer.next(msg);
      });
    });
  }
}
 
