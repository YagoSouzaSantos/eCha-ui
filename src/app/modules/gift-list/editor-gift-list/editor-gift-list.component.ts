import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GIFT_LIST } from '../../../core/constants/gift-list';
import { GiftListService } from '../../../core/services/gift-list.service';
import { GiftList } from './../../../core/interfaces/gift-list';
import { EDITOR_GIFT_LIST } from './imports';
import { SnackbarService } from '../../../shared/services/snackbar.service';

@Component({
  selector: 'app-editor-gift-list',
  standalone: true,
  imports: [EDITOR_GIFT_LIST],
  templateUrl: './editor-gift-list.component.html',
  styleUrls: ['./editor-gift-list.component.scss'],
})
export class EditorGiftListComponent implements OnInit {
  #giftListService = inject(GiftListService);
  #snackbarService = inject(SnackbarService);
  #route = inject(ActivatedRoute);

  giftList$ = signal<GiftList>(GIFT_LIST);

  constructor() { }

  ngOnInit(): void {
    this.getGiftListById();
  }

  getGiftListById() {
    const id = this.#route.snapshot.paramMap.get('key');
    if (id) {
      this.#giftListService.getGiftListById(id).subscribe({
        next: (giftList) => {
          this.giftList$.set(giftList);
          this.scrollToTop();
        },
        error: () => this.#snackbarService.showError('Erro ao carregar lista.'),
      });
    }
  }

  updateGiftList(): void {
    const currentGiftList = this.giftList$();
    if (currentGiftList && currentGiftList.id) {
      this.#giftListService.updateGiftList(currentGiftList.id, currentGiftList).subscribe({
        next: () =>  this.#snackbarService.showSuccess('Lista de presentes atualizada com sucesso.'),
        error: () => this.#snackbarService.showError('Erro ao atualizar lista de presentes.')
      });
    } else {
      this.#snackbarService.showError('Lista de presentes não disponível.')
    }
  }

  private scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
