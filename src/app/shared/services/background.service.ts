import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  private bgColorSignal = signal<string>('green');

  getBgColorSignal() {
    return this.bgColorSignal;
  }

  setbgColorSignal(value: string) {
    this.bgColorSignal.set(value);
  }
}
