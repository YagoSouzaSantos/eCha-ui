import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Category } from '../../../core/interfaces/category';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-category-chip',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './category-chip.component.html',
  styleUrl: './category-chip.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryChipComponent {
  @Output() filterChange = new EventEmitter<string>();

  categories: Category[] = [
    { value: 'Eletrodomésticos', viewValue: 'Eletrodomésticos' },
    { value: 'Utensílios de Cozinha', viewValue: 'Utensílios de Cozinha' },
    { value: 'Eletroportáteis', viewValue: 'Eletroportáteis' }
  ];

  onSubmit(value: string): void {
      this.filterChange.emit(value);
  }
}
