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
    { value: 'Eletrônicos', viewValue: 'Eletrônicos' },
    { value: 'Eletrodomésticos', viewValue: 'Eletrodomésticos' },
    { value: 'Móveis', viewValue: 'Móveis' },
    { value: 'Roupas', viewValue: 'Roupas' },
    { value: 'Outros', viewValue: 'Outros' }
  ];

  onSubmit(): void {
    this.alert()
  }

  alert(): void {
    this.#snackbarService.showAlert('Método não implementado!');
  }

}
