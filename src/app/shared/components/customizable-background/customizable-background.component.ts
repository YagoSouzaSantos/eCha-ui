import { Component, effect, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { ThemeColorDirective } from '../../../core/diretives/themeColor.directive';
import { BackgroundService } from '../../services/background.service';


@Component({
  selector: 'app-customizable-background',
  standalone: true,
  imports: [MatCard,ThemeColorDirective],
  templateUrl: './customizable-background.component.html',
  styleUrl: './customizable-background.component.scss'
})
export class BackgroundCardComponent {
  protected backgroundService = inject(BackgroundService)
  themeColor: string = 'login';

  constructor() {
    effect(() => {
      this.themeColor = this.backgroundService.getMessageSignal()();
      console.log('this.themeColor : ', this.themeColor );
    });
  }
}
