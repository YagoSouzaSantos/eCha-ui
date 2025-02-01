import { Component } from '@angular/core';
import { GiftList } from '../../../core/interfaces/gift-list';
import { giftListExample } from '../../../shared/tests/giftlist';
import { TopNavComponent } from '../../../core/layout/top-nav/top-nav.component';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {
  giftList: GiftList = giftListExample;
}
