import { Injectable } from '@angular/core';
import { BehaviorSubject, shareReplay } from 'rxjs';
import { GiftList } from '../../../core/interfaces/gift-list';


@Injectable({
  providedIn: 'root'
})
export class GiftListStateService {
  private GiftListActions$$ = new BehaviorSubject<GiftList[]>([]);

  state$ = this.GiftListActions$$.asObservable().pipe(
    shareReplay(1),
  );

  getValueState(): GiftList[] {
    return this.GiftListActions$$.getValue()
  }

  changeState(action: GiftList[]): void {
    this.GiftListActions$$.next(action);
  }

  cleanState(): void {
    this.GiftListActions$$.next([])
  }
}
