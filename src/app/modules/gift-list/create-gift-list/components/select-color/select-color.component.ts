import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { BackgroundService } from '../../../../../shared/services/background.service';

@Component({
  selector: 'app-select-color',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-color.component.html',
  styleUrl: './select-color.component.scss'
})
export class SelectColorComponent {
  @Output() selectedColor = new EventEmitter<string>();

  backgroundService = inject(BackgroundService)
  selectedColorIndex: number = 0;

  colors: { name: string, value: string }[] = [
    { name: 'green', value: '#59ba29' },
    { name: 'red', value: '#FF3E3E' },
    { name: 'blue', value: '#539ADC' },
    { name: 'yellow', value: '#FCFF61' },
    { name: 'purple', value: '#C376FF' },
    { name: 'orange', value: '#FFA665' },
    { name: 'pink', value: '#F9A5CD' },
    { name: 'gray', value: '#828282' }
  ];

  selectColor(index: number): void {
    this.selectedColorIndex = index;
    const selectedColorName = this.colors[index].name;
    this.selectedColor.emit(selectedColorName);
  }
}

