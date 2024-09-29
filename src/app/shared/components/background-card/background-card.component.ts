import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ThemeColorDirective } from '../../../core/diretives/themeColor.directive';


@Component({
  selector: 'app-background-card',
  standalone: true,
  imports: [MatCard,ThemeColorDirective],
  templateUrl: './background-card.component.html',
  styleUrl: './background-card.component.scss'
})
export class BackgroundCardComponent {
  themeColor= 'login'
}
