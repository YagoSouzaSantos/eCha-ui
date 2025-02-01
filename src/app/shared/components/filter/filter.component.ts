import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  @Input() placeholder: string = '';
  @Output() filterChange = new EventEmitter<string>();

  #fb = inject(FormBuilder);
  filterControl = this.#fb.control('');

  submit(): void {
    const value = this.filterControl.value?.trim();
    this.filterChange.emit(value);
  }
}
