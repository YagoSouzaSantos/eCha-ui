import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BULLETIN_BOARD_DIALOG, BULLETIN_BOARD_SHARED } from '../../imports';
import { HostMessageDialogData } from '../../../../core/interfaces/dialogs/host-message';

@Component({
  selector: 'app-host-message-dialog',
  standalone: true,
  imports: [BULLETIN_BOARD_DIALOG, BULLETIN_BOARD_SHARED],
  templateUrl: './host-message-dialog.component.html',
  styleUrl: './host-message-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostMessageDialogComponent {
  readonly dialogRef = inject(MatDialogRef<HostMessageDialogComponent>);
  readonly data = inject<HostMessageDialogData>(MAT_DIALOG_DATA);

  message: string | null = null;

  constructor() {
    this.message = this.data.message;
  }

  saveDate(): void {
    this.dialogRef.close({
      message: this.message
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
