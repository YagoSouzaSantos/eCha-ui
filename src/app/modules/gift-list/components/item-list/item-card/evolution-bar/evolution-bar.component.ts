import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-evolution-item-bar',
  standalone: true,
  imports: [],
  templateUrl: './evolution-bar.component.html',
  styleUrl: './evolution-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvolutionBarComponent implements OnChanges{
  @Input({ required: true }) r_valueItem!: number;
  @Input({ required: true }) r_valueItemCollected!: number;
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
      green: '#152B11',
      blue: '#041D4F',
      yellow: '#e0c65c',
      orange: '#e07d53',
      red: '#ad0505',
      pink: '#c975c7',
      purple: '#461258',
      gray: '#4f4f4f',
    };

    return this.progressColor = colorMap[this.r_themeColor]
  }

  calculatePercentage() {
    if (this.r_valueItem > 0) {
      this.percentageValue = (this.r_valueItemCollected / this.r_valueItem) * 100;
    } else {
      this.percentageValue = 0;
    }
  }
}
