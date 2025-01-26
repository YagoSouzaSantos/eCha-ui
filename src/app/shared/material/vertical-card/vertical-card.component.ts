import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-vertical-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './vertical-card.component.html',
  styleUrl: './vertical-card.component.scss'
})
export class VerticalCardComponent {

}
