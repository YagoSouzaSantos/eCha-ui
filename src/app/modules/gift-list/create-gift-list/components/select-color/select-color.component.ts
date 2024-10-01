import { Component, inject } from '@angular/core';
import { BackgroundService } from '../../../../../shared/services/background.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-color.component.html',
  styleUrl: './select-color.component.scss'
})
export class SelectColorComponent {
  backgroundService = inject(BackgroundService)
  selectedColorIndex: number = 0;

  colors: { name: string, value: string }[] = [
    { name: 'green', value: '#152B11' },
    { name: 'red', value: '#A30000' },
    { name: 'blue', value: '#041D4F' },
    { name: 'yellow', value: '#d1ae24' },
    { name: 'purple', value: '#461258' },
    { name: 'orange', value: '#e35214' },
    { name: 'pink', value: '#ba56b7' },
    { name: 'gray', value: '#4f4f4f' }
  ];

  selectColor(index: number): void {
    this.selectedColorIndex = index;
  }
}

