import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  // Signal que contém a string a ser compartilhada
  private messageSignal = signal<string>('');

  // Método para pegar o signal
  getMessageSignal() {
    return this.messageSignal;
  }

  // Método para alterar o valor do signal
  setMessage(value: string) {
    this.messageSignal.set(value);
    console.log('messageSignal: ', this.messageSignal);

  }

}
