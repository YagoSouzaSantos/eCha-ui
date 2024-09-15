import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopnavService } from '../../../core/layout/top-nav/services/topnav.service';
import { ThemeColorDirective } from '../../../core/diretives/themeColor.directive';
import { TopNavComponent } from "../../../core/layout/top-nav/top-nav.component";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-gift-list-container',
  standalone: true,
  imports: [CommonModule, ThemeColorDirective, TopNavComponent, RouterOutlet],
  templateUrl: './gift-list-container.component.html',
  styleUrl: './gift-list-container.component.scss'
})
export class GiftListContainerComponent {
  userThemeColor: string = 'blue';
}
