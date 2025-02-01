import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GiftList } from '../../../core/interfaces/gift-list';
import { Message } from '../../../core/interfaces/message';
import { SnackbarService } from '../../services/snackbar.service';
import { bulletinBoardExample } from '../../tests/bulletin-board';
import { DatePickerDialogComponent } from './datePickerDialog/datePickerDialog.component';
import { SUMMARY } from './imports';
import { SummaryMessageDialogComponent } from './summaryMessageDialog/summaryMessageDialog.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SUMMARY],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  @Input({ required: true }) r_editable!: boolean;
  @Input({ required: true }) r_giftListData!: GiftList;

  #snackbarService = inject(SnackbarService);
  readonly dialog = inject(MatDialog);

  remainingDays: number | null = null
  ml: Message[] = bulletinBoardExample.messages;

  share() {
    const url = `${window.location.origin}/donation/${this.r_giftListData.key}`;

    navigator.clipboard.writeText(url).then(
      () => {
        this.#snackbarService.showSuccess('URL copiada para a área de transferência com sucesso!')
      },
      () => {
        this.#snackbarService.showError('Não foi possível copiar para a área de transferência.')
      }
    );
  }

  showSummaryMessageDialog() {
    if (this.r_editable) {
      const dialogRef = this.dialog.open(SummaryMessageDialogComponent, {
        data: {
          message: this.r_giftListData.message,
          themeColor: this.r_giftListData.themeColor
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.r_giftListData.message = result.message
        }
      });
    }
  }

  showEventDateDialog() {
    if (this.r_editable) {
      const dialogRef = this.dialog.open(DatePickerDialogComponent, {
        data: {
          eventDate: this.r_giftListData.eventDate,
          themeColor: this.r_giftListData.themeColor
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.r_giftListData.eventDate = result.eventDate
        }
      });
    }
  }

  calculateDaysUntil(targetDate: Date): boolean {
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    if (today > targetDate) {
      return false;
    }
    const diffInTime = targetDate.getTime() - today.getTime();

    this.remainingDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    return true;
  }
}
