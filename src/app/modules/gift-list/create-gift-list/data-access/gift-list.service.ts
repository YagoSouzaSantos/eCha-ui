import { inject, Injectable } from '@angular/core';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, map, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { GiftList } from '../../../../core/interfaces/gift-list';
import { GiftListFilter } from '../../../../core/interfaces/gift-list-filter';
import { GiftListActionsService } from '../../actions/gift-list-actions.service';
import { GiftListStateService } from './gift-list-state.service';

@Injectable({
  providedIn: 'root'
})
export class GiftListService {
  getGiftListFilter(filter: GiftListFilter): any {
    throw new Error('Method not implemented.');
  }

  public giftListActions = inject(GiftListActionsService)
  private http = inject(HttpClient)
  private giftListState = inject(GiftListStateService)
  private snackbarService = inject(SnackbarService)

  constructor() {
    this.getAll()
  }

  getGiftList$ = this.giftListActions.getGiftList$.pipe(
    filter(id => id > 0),
    map(id => this.giftListState.getValueState().find(x => x.id == id))
  );

  getFilteredList$ = this.giftListActions.filter$.pipe(
    switchMap(filter => this.getGiftListFilter(filter)),
    shareReplay(1)
  )

  getAll(): void {
    this.http.get<{ giftLists: GiftList[] }>(`${environment.apiUrl}/giftlists`).pipe(
      tap(response => this.giftListState.changeState(response.giftLists))
    ).subscribe()
  }

  postGiftList(newItem: GiftList): Observable<GiftList> {
    return this.http.post<GiftList>(`${environment.apiUrl}/giftlists`, newItem).pipe(
      tap(() => {
        this.snackbarService.showSuccess('Lista de presentes criada com sucesso.')
      }),
      catchError((error) => {
        this.snackbarService.showError('Erro ao criar Lista de presentes.')

        console.error('Erro ao gravar dados:', error);
        return of({} as GiftList);
      })
    );
  }

  saveGiftList(newItem: GiftList) {
    this.postGiftList(newItem).subscribe();
  }

  getItemListToObservable(): Observable<GiftList[]> {
    return this.giftListState.state$
  }

}
