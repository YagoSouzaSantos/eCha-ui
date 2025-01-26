import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GiftListFilter } from '../../../core/interfaces/gift-list-filter';

@Injectable({
  providedIn: 'root'
})
export class GiftListActionsService {
  private getGiftList$$ = new BehaviorSubject<number>(0)
  getGiftList$ = this.getGiftList$$.asObservable()

  getGiftListById(param: number): void {
    this.getGiftList$$.next(param)
  }

  filter$$ = new BehaviorSubject<GiftListFilter>({
    title: '',
  })

  filter$ = this.filter$$.asObservable()
    filter(param: GiftListFilter): void {
    this.filter$$.next(param)
  }
}
