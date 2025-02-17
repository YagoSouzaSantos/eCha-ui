import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContribuitionHistoryDialogData } from '../../../core/interfaces/dialogs/contribuition-history';
import { HostMessageDialogComponent } from '../host-message/host-message-dialog/host-message-dialog.component';
import { BULLETIN_BOARD_DIALOG } from '../imports';
import { Contribution } from '../../../core/interfaces/contribution';

@Component({
  selector: 'app-contribution-history-dialog',
  standalone: true,
  imports: [BULLETIN_BOARD_DIALOG],
  templateUrl: './contribution-history-dialog.component.html',
  styleUrl: './contribution-history-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContributionHistoryDialogComponent {
  readonly dialogRef = inject(MatDialogRef<HostMessageDialogComponent>);
  readonly data = inject<ContribuitionHistoryDialogData>(MAT_DIALOG_DATA);

  messages: Contribution[];

  constructor() {
    this.messages = [...this.data.messages].sort((a, b) => b.value - a.value);
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
