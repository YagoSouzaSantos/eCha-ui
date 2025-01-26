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
  title: "Casamento Keiko e Yusuke",
  themeColor: "green",
  typography: 1,
  message: "Keiko e Yusuke estão construindo um novo lar e adorariam celebrar com você! Para nos ajudar a equipar nossa casa, ficaremos muito felizes com sua presença e com um pequeno presente para o nosso lar! 💕",
  photoUrl: "https://i.pinimg.com/550x/ed/f3/83/edf383feb6bf6d5b349fba55e4dfbe4a.jpg",
  photo: null,
  eventDate: null,
  totalValue: 3000,
  valueCollected: 950.95,
  creator: "Yusuke Urameshi",
  items: [
    {
      id: 12,
      name: "Geladeira",
      valueItem: 1500,
      valueItemCollected: 800,
      category: "Eletrodomésticos",
      image: null,
      imageUrl: "https://img.freepik.com/vetores-gratis/geladeira-no-fundo-branco_1308-102266.jpg?t=st=1737838557~exp=1737842157~hmac=bb154a7ba333a59b71d2f2951a8548fd0cd8e6d425796740bfccb00b5a493033&w=360"
    },
    {
      id: 14,
      name: "Máquina de escrever",
      valueItem: 980.25,
      valueItemCollected: 0,
      category: "Decoração",
      image: null,
      imageUrl: "https://img.freepik.com/vetores-gratis/maquina-de-escrever-vintage-na-cor-preta_1308-123614.jpg?t=st=1737895390~exp=1737898990~hmac=d4b64f942c205986ee43a7dcf0ea4f76cc2bf2b7e0ab8927ce1706a344318022&w=900"
    },
    {
      id: 14,
      name: "Pistola 9mm Beretta",
      valueItem: 5000,
      valueItemCollected: 1456.78,
      category: "Segurança",
      image: null,
      imageUrl: "https://d1oi6cs8zp9t8w.cloudfront.net/Custom/Content/Products/06/35/0635_pistola-beretta-92-fs-cal-9mm-15-tiros-4-9-oxidado_l4_638273419197858059.jpg"
    }
  ]
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
