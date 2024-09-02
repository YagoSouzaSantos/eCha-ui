import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopnavService {
  private displayBar = new BehaviorSubject<boolean>(false);
  private actionType = new BehaviorSubject<string>('start');
  private logoType = new BehaviorSubject<string>('default');

  displayBar$ = this.displayBar.asObservable();
  actionType$ = this.actionType.asObservable();
  logoType$ = this.logoType.asObservable();

  configureTopNavBar(displayBar: boolean, actionType: string,logoType: string ): void {
    this.displayBar.next(displayBar);
    this.actionType.next(actionType);
    this.logoType.next(logoType);
  }
}
