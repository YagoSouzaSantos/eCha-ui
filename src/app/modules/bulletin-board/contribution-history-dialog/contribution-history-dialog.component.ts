import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Message } from '../../../core/interfaces/message';
import { HostMessageDialogComponent } from '../host-message/host-message-dialog/host-message-dialog.component';

export interface DialogData {
  messages: Message[];
  themeColor: string;
}

@Component({
  selector: 'app-contribution-history-dialog',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './contribution-history-dialog.component.html',
  styleUrl: './contribution-history-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributionHistoryDialogComponent {
  readonly dialogRef = inject(MatDialogRef<HostMessageDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  messages: Message[];

  constructor() {
    this.messages = this.data.messages.sort((a, b) => b.value - a.value);
  }

  saveDate(): void {
    this.dialogRef.close({
      messages: this.messages
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
