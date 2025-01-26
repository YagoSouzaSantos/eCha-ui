import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ThemeColorDirective } from '../../../../core/diretives/themeColor.directive';

export interface DialogData {
  eventDate: string;
  themeColor: string;
}

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-date-picker-dialog',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, MatButtonModule, ThemeColorDirective],
  templateUrl: './datePickerDialog.component.html',
  styleUrl: './datePickerDialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatePickerDialogComponent {
  readonly dialogRef = inject(MatDialogRef<DatePickerDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  selectedDate: Date | null = null;

  saveDate(): void {
    this.dialogRef.close({
      eventDate: this.selectedDate
    });
  }

  onCancel(): void {
    this.dialogRef.close({
      eventDate: null
    });
  }
}
