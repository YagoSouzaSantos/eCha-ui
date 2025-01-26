import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  #snackbarService = inject(SnackbarService);

  categories: Category [] = [
    { value: 'Eletrodomésticos', viewValue: 'Eletrodomésticos' },
    { value: 'Utensílios de Cozinha', viewValue: 'Utensílios de Cozinha' },
    { value: 'Eletroportáteis', viewValue: 'Eletroportáteis' }
  ];

  onSubmit(): void {
    this.alert()
  }

  alert(): void {
    this.#snackbarService.showAlert('Método não implementado!');
  }

}
