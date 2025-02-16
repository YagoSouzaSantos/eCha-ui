import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContributionHistoryDialogComponent } from '../contribution-history-dialog/contribution-history-dialog.component';
import { BULLETIN_BOARD_SHARED, MESSAGES } from '../imports';
import { Contribution } from '../../../core/interfaces/contribution';
import { ContributionService } from '../../../core/services/contribution.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MESSAGES, BULLETIN_BOARD_SHARED],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  @Input({ required: true }) r_messages!: Contribution[];
  @Input({ required: true }) r_themeColor!: string;
  @Input({ required: true }) r_editable!: boolean;

  readonly dialog = inject(MatDialog);
  #contributionService = inject(ContributionService)

  toggleVisibility(message: Contribution) {
    message.isVisible = !message.isVisible;
    this.updateContribution(message)
  }

  updateContribution(updatedData: Contribution): void {
    this.#contributionService.putContribution(updatedData as Contribution).subscribe({
      error: (error) => {
        console.error('Erro ao atualizar visualização da contribuição:', error);
      }
    });
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
