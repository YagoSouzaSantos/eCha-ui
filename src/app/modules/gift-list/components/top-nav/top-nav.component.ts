import { Component } from '@angular/core';
import { ThemeColorDirective } from '../../../../core/diretives/themeColor.directive';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [ThemeColorDirective],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  themeColor = 'purple';
}
