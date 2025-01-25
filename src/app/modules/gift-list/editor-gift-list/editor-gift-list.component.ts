import { GiftList } from './../../../core/interfaces/gift-list';
import { Component } from '@angular/core';
import { MinimalistFooterComponent } from "../../../core/layout/minimalist-footer/minimalist-footer.component";
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { SummaryComponent } from "../../../shared/components/summary/summary.component";
import { EvolutionBarComponent } from "../../../shared/components/evolution-bar/evolution-bar.component";
import { ItemListComponent } from "../components/item-list/item-list.component";

const giftListExample: GiftList = {
  id: 1,
  key: "qwertyuiop",
  title: "Casamento de Ana e Pedro",
  themeColor: "blue",
  typography: 1,
  message: "Ana e Pedro, desejamos a vocês uma vida cheia de amor e felicidade! 💕",
  photoUrl: "https://img.freepik.com/fotos-gratis/homem-sorridente-e-mulher-olhando-um-para-o-outro_23-2148821620.jpg?t=st=1737680583~exp=1737684183~hmac=db8c26ca389ee748fd13152a2f6f97abfc819d6b343db6bd506b1e3d9ba50782&w=740",
  photo: null,
  eventDate: null,
  totalValue: 3000,
  valueCollected: 950.95,
  creator: "Bryan O' Connor",
};

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
