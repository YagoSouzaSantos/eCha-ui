import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BulletinBoard } from '../../core/interfaces/bulletin-board';
import { BULLETIN_BOARD_IMPORTS } from './imports';
import { BulletinBoardStateService } from './services/bulletin-board-state.service';
import { ActivatedRoute } from '@angular/router';

import { GiftListService } from '../../core/services/gift-list.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { BULLETIN_BOARD } from '../../core/constants/bulletinBoard';
import { map } from 'rxjs';

@Component({
  selector: 'app-bulletin-board',
  standalone: true,
  imports: [BULLETIN_BOARD_IMPORTS],
  templateUrl: './bulletin-board.component.html',
  styleUrl: './bulletin-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulletinBoardComponent {

  editable: boolean = false;

  #bulletinBoardStateService = inject(BulletinBoardStateService);
  #giftListService = inject(GiftListService);
  #snackbarService = inject(SnackbarService);
  #route = inject(ActivatedRoute);
  bulletinBoard$ = signal<BulletinBoard>(BULLETIN_BOARD);

  ngOnInit() {
    this.#bulletinBoardStateService.modelState$.subscribe((value) => {
      this.editable = value;
    });
    this.getGiftListById();
    window.scrollTo(0, 0);
  }

  getGiftListById() {
    const id = this.#route.snapshot.paramMap.get('key');
    if (!id) return;

    this.#giftListService.getGiftListById(id).pipe(
      map(giftList => ({
        giftListKey: giftList.id,
        hostMessage: '',
        hostImage: giftList.image,
        totalValue: giftList.totalValue,
        collectedValue: giftList.valueCollected,
        contributorCount: giftList.contributorCount,
        themeColor: giftList.highlightColor,
        eventDate: giftList.eventDate,
        messages: giftList.contributions,
      }))
    ).subscribe({
      next: (mappedData) => {
        this.bulletinBoard$.set(mappedData);
        this.scrollToTop();
      },
      error: () => this.#snackbarService.showError('Erro ao carregar lista.')
    });
  }

  private scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
