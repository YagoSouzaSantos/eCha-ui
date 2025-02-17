import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, switchMap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GiftList } from '../interfaces/gift-list';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class GiftListService {
  private http = inject(HttpClient);

  createGiftList(newGiftList: GiftList): Observable<GiftList> {
    return this.http.post<GiftList>(`${environment.apiUrl}/list`, newGiftList);
  }

  getAllGiftLists(): Observable<GiftList[]> {
    return this.http.get<GiftList[]>(`${environment.apiUrl}/list`);
  }

  getGiftListById(id: string): Observable<GiftList> {
    return this.http.get<GiftList>(`${environment.apiUrl}/list/${id}`).pipe(
      map((giftList: any) => {
        giftList.creator = giftList.user.name;

        giftList.contributions = [];

        giftList.items.forEach((item: Item) => {

          item.valueCollected = item.contributions.reduce((sum, contribution) => sum + contribution.value, 0);

          giftList.contributions.push(...item.contributions);
        });

        return giftList;
      })
    );
  }

  updateGiftList(id: string, updatedGiftList: GiftList): Observable<GiftList> {
    return this.http.put<GiftList>(`${environment.apiUrl}/list/${id}`, updatedGiftList);
  }

  giftListCashout(id: string): Observable<string> {
    return this.http.post(`${environment.apiUrl}/list/${id}/cashout`, null, { responseType: 'text' });
  }

}
