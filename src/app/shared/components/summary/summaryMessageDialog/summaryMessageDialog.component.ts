import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SmoothBackGroundDirective } from '../../../../core/diretives/smoothBackGround.directive';

export interface DialogData {
  message: string;
  themeColor: string;
}

@Component({
  selector: 'app-summary-message-dialog',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, MatButtonModule, SmoothBackGroundDirective],
  templateUrl: './summaryMessageDialog.component.html',
  styleUrl: './summaryMessageDialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryMessageDialogComponent {
    readonly dialogRef = inject(MatDialogRef<SummaryMessageDialogComponent>);
    readonly data = inject<DialogData>(MAT_DIALOG_DATA);

    message: string | null = null;

    saveDate(): void {
      this.dialogRef.close({
        message: this.message
      });
    }

    onCancel(): void {
      this.dialogRef.close();
    }
}
