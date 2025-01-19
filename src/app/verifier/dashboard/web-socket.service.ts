import { Injectable } from '@angular/core';
import { Client, Message } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private client: Client;
  
  constructor() {
    this.client = new Client({
      webSocketFactory: () => new SockJS(environment.apiUrl + '/ws'),
      debug: (str) => console.log(str),
    });
  }

  // connect(callback: (message: string) => void): void {
  //   this.client.onConnect = () => {
  //     this.client.subscribe('/topic/processed', (message: Message) => {
  //       callback(message.body);
  //     });
  //   };
  //   this.client.activate();
  // }
  connectPesalinkData(callback: (message: string) => void): void {

    this.client.onConnect = () => {
      this.client.subscribe('/topic/pesalink', (message: Message) => {
        callback(message.body);
      });
    };
    this.client.activate();
  }

  disconnect(): void {
    if (this.client) {
      this.client.deactivate();
    }
  }
}
