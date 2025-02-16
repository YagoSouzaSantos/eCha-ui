import { GiftList } from './../../../core/interfaces/gift-list';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ThemeColorDirective } from '../../../core/diretives/themeColor.directive';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GiftListService } from '../../../core/services/gift-list.service';
import { SnackbarService } from '../../services/snackbar.service';

export interface DialogData {
  giftList: GiftList
}


@Component({
  selector: 'app-withdraw-dialog',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ThemeColorDirective],
  templateUrl: './withdraw-dialog.component.html',
  styleUrl: './withdraw-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawDialogComponent {
  readonly dialogRef = inject(MatDialogRef<WithdrawDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  #giftListService = inject(GiftListService)
  #snackbarService = inject(SnackbarService)

  withdraw() {
    if(this.data.giftList.totalValue > 0) {
      this.#giftListService.giftListCashout(this.data.giftList.id).subscribe({
        next: (response) => {
          this.#snackbarService.showSuccess(response);
          location.reload();
        },
        error: (err) => console.error('Erro ao realizar saque:', err)
      });
      this.dialogRef.close();
    }
  }

onCancel(): void {
  this.dialogRef.close();
}

}
