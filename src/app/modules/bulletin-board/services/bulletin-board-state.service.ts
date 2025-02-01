import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BulletinBoardStateService {
  private modelState = new BehaviorSubject<boolean>(false);
  public modelState$ = this.modelState.asObservable();

  setModelState(value: boolean) {
    this.modelState.next(value);
  }
}


