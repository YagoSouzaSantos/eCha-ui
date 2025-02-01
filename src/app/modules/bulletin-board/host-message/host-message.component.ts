import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BULLETIN_BOARD_SHARED, HOST_MESSAGE } from '../imports';
import { HostMessageDialogComponent } from './host-message-dialog/host-message-dialog.component';

@Component({
  selector: 'app-host-message',
  standalone: true,
  imports: [HOST_MESSAGE, BULLETIN_BOARD_SHARED],
  templateUrl: './host-message.component.html',
  styleUrl: './host-message.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostMessageComponent {
  @Input({ required: true }) r_themeColor!: string;
  @Input({ required: true }) r_hostImage!: string;
  @Input({ required: true }) r_hostMessage!: string;
  @Input({ required: true }) r_editable!: boolean;

  readonly dialog = inject(MatDialog);

  showHostMessageDialog() {
    const dialogRef = this.dialog.open(HostMessageDialogComponent, {
      data: {
        message: this.r_hostMessage,
        themeColor: this.r_themeColor
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.r_hostMessage = result.message
      }
    });
  }
}
