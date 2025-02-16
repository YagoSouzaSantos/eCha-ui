import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GiftList } from '../../../core/interfaces/gift-list';
import { SnackbarService } from '../../services/snackbar.service';
import { DatePickerDialogComponent } from './datePickerDialog/datePickerDialog.component';
import { SUMMARY } from './imports';
import { SummaryMessageDialogComponent } from './summaryMessageDialog/summaryMessageDialog.component';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [SUMMARY],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',

})
export class SummaryComponent {
  @Input({ required: true }) r_editable!: boolean;
  @Input({ required: true }) r_giftListData!: GiftList;
  @Output() save: EventEmitter<void> = new EventEmitter<void>();

  #snackbarService = inject(SnackbarService);
  readonly dialog = inject(MatDialog);

  remainingDays: number | null = null

  share() {
    const url = `${window.location.origin}/donation/${this.r_giftListData.id}`;

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
          message: this.r_giftListData.description,
          themeColor: this.r_giftListData.highlightColor
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.r_giftListData.description = result.message
        }
      });
    }
  }

  showEventDateDialog() {
    if (this.r_editable) {
      const dialogRef = this.dialog.open(DatePickerDialogComponent, {
        data: {
          eventDate: this.r_giftListData.eventDate,
          themeColor: this.r_giftListData.highlightColor
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.r_giftListData.eventDate = result.eventDate
        }
      });
    }
  }

  calculateDaysUntil(targetDate: string | Date | null): boolean {
    if (!targetDate) return false;

    const target = typeof targetDate === "string" ? new Date(targetDate) : targetDate;

    if (isNaN(target.getTime())) return false;

    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    target.setUTCHours(0, 0, 0, 0);

    if (today > target) {
      return false;
    }

    const diffInTime = target.getTime() - today.getTime();
    this.remainingDays = Math.ceil(diffInTime / (1000 * 3600 * 24));

    return true;
  }

  onImageChange(event: { image: string }) {
    this.r_giftListData.image = event.image;
  }

  saveGiftList() {
    this.save.emit();
  }
}
