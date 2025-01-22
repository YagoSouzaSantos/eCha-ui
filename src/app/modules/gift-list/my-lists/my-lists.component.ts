import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { GiftListService } from '../data-access/gift-list.service';
import { CardComponent } from "./card/card.component";


@Component({
  selector: 'app-my-lists',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, RouterLink, MatButtonModule, CardComponent],
  templateUrl: './my-lists.component.html',
  styleUrl: './my-lists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyListsComponent {

  protected giftListService = inject(GiftListService)

  protected user$: any
  protected filteredList$ = this.giftListService.getFilteredList$

}
