import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = [];
  displaying: boolean = false;

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

  toggleCreatePopup() {
    this.displaying = !this.displaying;
  }
}