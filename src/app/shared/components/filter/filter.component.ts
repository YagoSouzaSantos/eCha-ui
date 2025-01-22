import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { createFilterForm } from './form-config';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatInputModule, MatIcon, ReactiveFormsModule, FormsModule, MatButtonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  #fb = inject(FormBuilder)
  #snackbarService = inject(SnackbarService);
  filterForm!: FormGroup

  ngOnInit(): void {
    this.filterForm = createFilterForm(this.#fb);
  }

  onSubmit(): void {
    this.alert()
  }

  alert(): void {
    this.#snackbarService.showAlert('Método não implementado!');
  }


}
