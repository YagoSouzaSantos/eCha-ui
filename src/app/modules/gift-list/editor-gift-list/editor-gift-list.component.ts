import { GiftList } from './../../../core/interfaces/gift-list';
import { Component, inject, OnInit, signal } from '@angular/core';
import { MinimalistFooterComponent } from "../../../core/layout/minimalist-footer/minimalist-footer.component";
import { SummaryComponent } from "../../../shared/components/summary/summary.component";
import { EvolutionBarComponent } from "../../../shared/components/evolution-bar/evolution-bar.component";
import { TopNavComponent } from '../../../core/layout/top-nav/top-nav.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { GiftListService } from '../../../core/services/gift-list.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-gift-list',
  standalone: true,
  imports: [MinimalistFooterComponent, TopNavComponent, SummaryComponent, EvolutionBarComponent, ItemListComponent, MatProgressBarModule, CommonModule],
  templateUrl: './editor-gift-list.component.html',
  styleUrl: './editor-gift-list.component.scss'
})
export class EditorGiftListComponent {
  #giftListService = inject(GiftListService);
  #route = inject(ActivatedRoute);

  giftList$ = signal<GiftList | null>(null);

  constructor() {
    this.getGiftListById();
    console.log(this.giftList$());
  }

  getGiftListById() {
    const id = this.#route.snapshot.paramMap.get('key');
    if (id) {
      this.#giftListService.getGiftListById(id).subscribe({
        next: (giftList) => this.giftList$.set(giftList),
        error: (error) => console.error('Erro ao buscar lista:', error),
      });
    }
  }
}
