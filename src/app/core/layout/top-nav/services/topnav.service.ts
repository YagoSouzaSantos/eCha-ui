import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopnavService {
 private myBooleanSubject = new BehaviorSubject<boolean>(false);
 myBoolean$ = this.myBooleanSubject.asObservable();

 constructor() {}

 getMyBoolean(): boolean {
   return this.myBooleanSubject.value;
 }
 setMyBoolean(value: boolean): void {
   this.myBooleanSubject.next(value);
 }
}
