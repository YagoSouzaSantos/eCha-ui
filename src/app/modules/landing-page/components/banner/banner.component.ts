import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SmoothBackGroundDirective } from '../../../../core/diretives/smoothBackGround.directive';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule,SmoothBackGroundDirective],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Output() eventClick = new EventEmitter<void>();

  onClick() {
    this.eventClick.emit();
  }
}
