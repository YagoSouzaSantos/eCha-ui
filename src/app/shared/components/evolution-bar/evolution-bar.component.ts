import { Component, Input, OnChanges } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-evolution-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './evolution-bar.component.html',
  styleUrl: './evolution-bar.component.scss'
})
export class EvolutionBarComponent implements OnChanges {
  @Input({ required: true }) r_contributorCount: number = 0;
  @Input({ required: true }) r_valueCollected: number | undefined = 0;
  @Input({ required: true }) r_totalValue: number = 0;
  @Input({ required: true }) r_themeColor!: string;

  percentageValue: number = 0;
  height: number = 8;
  width: number = 100;
  backgroundColor: string = '';
  progressColor!: string;

  ngOnChanges() {
    this.calculatePercentage();
  }

  paletteByTheme() {
    const colorMap: { [key: string]: string } = {
      green: '#CFFFC5',
      blue: '#85BDFF',
      yellow: '#ffff85',
      orange: '#ffb58a',
      red: '#fc938b',
      pink: '#ffc7fd',
      purple: '#C285FF',
      gray: '#9E9E9E',
    };

    return this.progressColor = colorMap[this.r_themeColor]
  }

  calculatePercentage() {
    const valueCollected = this.r_valueCollected || 0;
    const totalValue = this.r_totalValue || 0;

    if (totalValue > 0) {
      this.percentageValue = Math.floor((valueCollected / totalValue) * 100);
    } else {
      this.percentageValue = 0;
    }
  }

}


