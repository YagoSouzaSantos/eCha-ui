import { Component, Input } from '@angular/core';
import { ThemeColorDirective } from '../../../../core/diretives/themeColor.directive';
import { TopNavImports } from '../../../../core/layout/top-nav/config/material';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [ThemeColorDirective,TopNavImports],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {
  @Input({required: true}) r_themeColor!: string;

  logout() {
  }
}
