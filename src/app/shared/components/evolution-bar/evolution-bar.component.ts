import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-evolution-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './evolution-bar.component.html',
  styleUrl: './evolution-bar.component.scss'
})
export class EvolutionBarComponent {
  AmountRaised = '1234,56';
  value: number = 40;
  height: number = 8;
  width: number = 200;
  backgroundColor: string = '#1E003C';
  progressColor: string = '#C285FF';
}
