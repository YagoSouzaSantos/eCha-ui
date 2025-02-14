import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GIFT_LIST } from '../../../core/constants/gift-list';
import { GiftListService } from '../../../core/services/gift-list.service';
import { GiftList } from './../../../core/interfaces/gift-list';
import { EDITOR_GIFT_LIST } from './imports';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { UserService } from '../../../core/services/user.service';
import { ItemService } from '../../../core/services/item.service';
import { switchMap, forkJoin, catchError, of, map } from 'rxjs';
import { Item } from '../../../core/interfaces/item';
import { SelectColorComponent } from '../create-gift-list/components/select-color/select-color.component';

@Component({
  selector: 'app-editor-gift-list',
  standalone: true,
  imports: [EDITOR_GIFT_LIST, SelectColorComponent],
  templateUrl: './editor-gift-list.component.html',
  styleUrls: ['./editor-gift-list.component.scss'],
})
export class EditorGiftListComponent implements OnInit {
  #giftListService = inject(GiftListService);
  #snackbarService = inject(SnackbarService);
  #itemService = inject(ItemService);
  #userService = inject(UserService);
  #route = inject(ActivatedRoute);

  giftList$ = signal<GiftList>(GIFT_LIST);

  ngOnInit(): void {
    this.getGiftListById();
  }

  getGiftListById() {
    const id = this.#route.snapshot.paramMap.get('key');
    if (!id) return;

    this.#giftListService.getGiftListById(id).pipe(
      switchMap(giftList =>
        forkJoin({
          userName: this.#userService.getUserNameById(giftList.userId).pipe(catchError(() => of('Usuário desconhecido'))),
          items: this.#itemService.getItemByListId(id).pipe(catchError(() => of([])))
        }).pipe(
          map(({ userName, items }) => {
            giftList.creator = userName;
            giftList.items = items;
            return giftList;
          })
        )
      )
    ).subscribe({
      next: (updatedGiftList) => {
        this.giftList$.set(updatedGiftList);
        this.scrollToTop();
      },
      error: () => this.#snackbarService.showError('Erro ao carregar lista.')
    });
  }

  updateGiftList(): void {
    const currentGiftList = this.giftList$();
    if (currentGiftList && currentGiftList.id) {
      this.#giftListService.updateGiftList(currentGiftList.id, currentGiftList).subscribe({
        next: () => this.#snackbarService.showSuccess('Lista de presentes atualizada com sucesso.'),
        error: () => this.#snackbarService.showError('Erro ao atualizar lista de presentes.')
      });
    } else {
      this.#snackbarService.showError('Lista de presentes não disponível.')
    }
  }

  addItem(newItem: Item) {
    this.giftList$.update((giftList) => ({
      ...giftList,
      items: [...giftList.items, newItem],
    }));
  }

  updateItem(updatedItem: Item) {
    this.giftList$.update((giftList) => ({
      ...giftList,
      items: giftList.items.map(item => item.id === updatedItem.id ? updatedItem : item),
    }));
  }

  private scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  onSelectColor(color: string): void {
    this.updateHighlightColor(color);
  }

  updateHighlightColor(newColor: string): void {
    this.giftList$.update((giftList) => ({
      ...giftList,
      highlightColor: newColor
    }));
  }
}
