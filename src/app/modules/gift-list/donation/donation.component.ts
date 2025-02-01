import { Component } from '@angular/core';
import { GiftList } from '../../../core/interfaces/gift-list';
import { giftListExample } from '../../../shared/tests/giftlist';
import { TopNavComponent } from '../../../core/layout/top-nav/top-nav.component';
import { MinimalistFooterComponent } from '../../../core/layout/minimalist-footer/minimalist-footer.component';
import { SummaryComponent } from '../../../shared/components/summary/summary.component';
import { ItemListComponent } from '../components/item-list/item-list.component';
import { EvolutionBarComponent } from '../../../shared/components/evolution-bar/evolution-bar.component';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [MinimalistFooterComponent, TopNavComponent, SummaryComponent, EvolutionBarComponent, ItemListComponent],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  giftList: GiftList = giftListExample;
}
