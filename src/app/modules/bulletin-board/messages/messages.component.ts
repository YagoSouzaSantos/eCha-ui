import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Message } from '../../../core/interfaces/message';
import { ContributionHistoryDialogComponent } from '../contribution-history-dialog/contribution-history-dialog.component';
import { BULLETIN_BOARD_SHARED, MESSAGES } from '../imports';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MESSAGES, BULLETIN_BOARD_SHARED],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  @Input({ required: true }) r_messages!: Message[];
  @Input({ required: true }) r_themeColor!: string;
  @Input({ required: true }) r_editable!: boolean;

  readonly dialog = inject(MatDialog);

  toggleVisibility(message: Message) {
    message.visible = !message.visible;
  }

  viewContributionHistory() {
    this.dialog.open(ContributionHistoryDialogComponent, {
      data: {
        messages: this.r_messages,
        themeColor: this.r_themeColor
      }
    });
  }
}
