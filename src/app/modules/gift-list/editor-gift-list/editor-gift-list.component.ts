import { GiftList } from './../../../core/interfaces/gift-list';
import { Component } from '@angular/core';
import { MinimalistFooterComponent } from "../../../core/layout/minimalist-footer/minimalist-footer.component";
import { SummaryComponent } from "../../../shared/components/summary/summary.component";
import { EvolutionBarComponent } from "../../../shared/components/evolution-bar/evolution-bar.component";
import { ItemListComponent } from "../components/item-list/item-list.component";
import { giftListExample } from '../../../shared/tests/giftlist';
import { TopNavComponent } from '../../../core/layout/top-nav/top-nav.component';

@Component({
  selector: 'app-editor-gift-list',
  standalone: true,
  imports: [MinimalistFooterComponent, TopNavComponent, SummaryComponent, EvolutionBarComponent, ItemListComponent],
  templateUrl: './editor-gift-list.component.html',
  styleUrl: './editor-gift-list.component.scss'
})
export class EditorGiftListComponent {
  giftList: GiftList = giftListExample;
}
