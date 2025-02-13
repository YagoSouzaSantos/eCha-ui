import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Item } from '../interfaces/item';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private http = inject(HttpClient);

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${environment.apiUrl}/item`, item);
  }
  // addItem(item: Item): void {
  //   console.log('item: ', item);
  // }

  getItemByListId(id: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/item`).pipe(
      map(items => items.filter(item => item.listId === id))
    );
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${environment.apiUrl}/item/${item.id}`, item);
  }
}
