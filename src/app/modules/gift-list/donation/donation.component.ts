import { Component, inject, signal } from '@angular/core';
import { GiftList } from '../../../core/interfaces/gift-list';
import { TopNavComponent } from '../../../core/layout/top-nav/top-nav.component';
import { MinimalistFooterComponent } from '../../../core/layout/minimalist-footer/minimalist-footer.component';
import { SummaryComponent } from '../../../shared/components/summary/summary.component';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { EvolutionBarComponent } from '../../../shared/components/evolution-bar/evolution-bar.component';
import { ActivatedRoute } from '@angular/router';
import { switchMap, forkJoin, catchError, of, map } from 'rxjs';
import { GiftListService } from '../../../core/services/gift-list.service';
import { ItemService } from '../../../core/services/item.service';
import { UserService } from '../../../core/services/user.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { GIFT_LIST } from '../../../core/constants/gift-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [MinimalistFooterComponent, TopNavComponent, SummaryComponent, EvolutionBarComponent, ItemListComponent, MatProgressBarModule],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  #giftListService = inject(GiftListService);
  #snackbarService = inject(SnackbarService);
  #route = inject(ActivatedRoute);
  giftList$ = signal<GiftList>(GIFT_LIST);

  ngOnInit(): void {
    this.getGiftListById();
  }

  getGiftListById() {
    const id = this.#route.snapshot.paramMap.get('key');
    if (!id) return;

    this.#giftListService.getGiftListById(id).subscribe({
      next: (giftList) => {
        this.giftList$.set(giftList);
        console.log('this.giftList$: ', this.giftList$());
        this.scrollToTop();
      },
      error: () => this.#snackbarService.showError('Erro ao carregar lista.')
    });
  }


  private scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
