import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bulletin-board-evolution-bar',
  standalone: true,
  imports: [],
  templateUrl: './bulletin-board-evolution-bar.component.html',
  styleUrl: './bulletin-board-evolution-bar.component.scss'
})
export class BulletinBoardEvolutionBarComponent {
  @Input({ required: true }) r_totalValue!: number;
  @Input({ required: true }) r_valueCollected!: number;
  @Input({ required: true }) r_themeColor!: string;
  @Input({ required: true }) r_contributorCount!: number;
  @Input({ required: true }) r_eventDate?: Date | null;

  percentageValue: number = 0;
  remainingDays: number | null = null

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
    if (this.r_totalValue > 0) {
      this.percentageValue = Math.floor((this.r_valueCollected / this.r_totalValue) * 100);
    } else {
      this.percentageValue = 0;
    }
  }

  calculateDaysUntil(targetDate: any): boolean {
    if (!targetDate) {
      console.error("Erro: targetDate é indefinido ou nulo.");
      return false;
    }

    const date = targetDate instanceof Date ? targetDate : new Date(targetDate);

    if (isNaN(date.getTime())) {
      console.error("Erro: targetDate não é uma data válida:", targetDate);
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    if (today > date) {
      return false;
    }

    const diffInTime = date.getTime() - today.getTime();
    this.remainingDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    return true;
  }

}
