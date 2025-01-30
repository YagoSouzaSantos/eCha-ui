import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Message } from '../../../core/interfaces/message';
import { MatButtonModule } from '@angular/material/button';
import { TextColorDirective } from '../../../core/diretives/textColor.directive';
import { SmoothBackGroundDirective } from '../../../core/diretives/smoothBackGround.directive';
import { MatDialog } from '@angular/material/dialog';
import { ContributionHistoryDialogComponent } from '../contribution-history-dialog/contribution-history-dialog.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule,MatButtonModule,TextColorDirective,SmoothBackGroundDirective],
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
