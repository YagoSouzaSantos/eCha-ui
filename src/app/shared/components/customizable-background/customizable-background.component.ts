import { Component, effect, inject } from '@angular/core';
import { BackgroundColorDirective } from '../../../core/diretives/backgroundColor.directive';
import { BackgroundService } from '../../services/background.service';


@Component({
  selector: 'app-customizable-background',
  standalone: true,
  imports: [BackgroundColorDirective],
  templateUrl: './customizable-background.component.html',
  styleUrl: './customizable-background.component.scss'
})
export class BackgroundCardComponent {
  protected backgroundService = inject(BackgroundService)
  backgroundColor: string = 'login';

  constructor() {
    effect(() => {
      this.backgroundColor = this.backgroundService.getBgColorSignal()();
    });
  }
}
