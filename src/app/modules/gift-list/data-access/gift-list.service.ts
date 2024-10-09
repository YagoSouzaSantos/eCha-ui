import { SnackbarService } from './../../../shared/services/snackbar.service';
import { effect, inject, Injectable } from '@angular/core';
import { GiftListActionsService } from '../actions/gift-list-actions.service';
import { HttpClient } from '@angular/common/http';
import { GiftListStateService } from './gift-list-state.service';
import { catchError, filter, map, Observable, of, shareReplay, switchMap, tap } from 'rxjs';
import { GiftList } from '../../../core/interfaces/gift-list';
import { GiftListFilter } from '../../../core/interfaces/gift-list-filter';
import { environment } from '../../../../environments/environment';

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
      tap(response => {
        console.log('Resposta do POST:', response);
        // Atualiza o estado usando changeState após a resposta
        const currentState = this.giftListState.getValueState();
        this.giftListState.changeState([...currentState, response]); // Adiciona o novo item ao estado
      }),
      catchError((error) => {
        console.error('Erro ao gravar dados:', error);
        return of({} as GiftList); // Retorna um objeto vazio como GiftList
      })
    );
  }

  // Método que será chamado no componente para salvar a lista de presentes
  saveGiftList(newItem: GiftList) {
    this.postGiftList(newItem).subscribe(); // Chama o postGiftList diretamente
  }

  getItemListToObservable(): Observable<GiftList[]> {
    return this.giftListState.state$
  }

}
