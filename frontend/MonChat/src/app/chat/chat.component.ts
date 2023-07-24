import { Component } from '@angular/core';
import { SocketChatService } from '../socket-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  messages: string[] = [];

  constructor(private socketChatService: SocketChatService) {
    this.socketChatService.onNewMessage().subscribe((msg: string) => {
      this.messages.push(msg);
    });
  }

  sendMessage(msg: string): void {
    this.socketChatService.sendMessage(msg);
  }
}
