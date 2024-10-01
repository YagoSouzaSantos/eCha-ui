import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private messageSignal = signal<string>('');

  getMessageSignal() {
    return this.messageSignal;
  }

  setMessage(value: string) {
    this.messageSignal.set(value);
  }
}
