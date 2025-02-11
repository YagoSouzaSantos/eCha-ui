import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GiftList } from '../interfaces/gift-list';

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
    return this.http.get<GiftList>(`${environment.apiUrl}/list/${id}`);
  }

  updateGiftList(id: string, updatedGiftList: GiftList): Observable<GiftList> {
    return this.http.put<GiftList>(`${environment.apiUrl}/list/${id}`, updatedGiftList);
  }
}
