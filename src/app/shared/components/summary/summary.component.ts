import { DatePipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { GiftList } from '../../../core/interfaces/gift-list';
import { VerticalCardComponent } from '../../material/vertical-card/vertical-card.component';
import { SnackbarService } from '../../services/snackbar.service';
import { ProfilePictureComponent } from '../profile-picture/profile-picture.component';
import { MessageList } from './../../../core/interfaces/MessageList ';
import { DatePickerDialogComponent } from './datePickerDialog/datePickerDialog.component';
import { SummaryDataComponent } from "./summary-data/summary-data.component";
import { SummaryMessageDialogComponent } from './summaryMessageDialog/summaryMessageDialog.component';
import { TopContributorsComponent } from "./top-contributors/top-contributors.component";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [VerticalCardComponent, TopContributorsComponent, ProfilePictureComponent, MatButton, SummaryDataComponent, DatePipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  @Input({ required: true }) r_editable!: boolean;
  @Input({ required: true }) r_giftListData!: GiftList;

  #snackbarService = inject(SnackbarService);
  readonly dialog = inject(MatDialog);

  ml: MessageList[] = []

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

  showEventDateDialog() {
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
