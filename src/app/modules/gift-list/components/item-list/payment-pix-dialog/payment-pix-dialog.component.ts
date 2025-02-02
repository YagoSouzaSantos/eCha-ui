import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG } from '../../imports';
import { SnackbarService } from '../../../../../shared/services/snackbar.service';


export interface DialogData {
  themeColor: string;
  value: string;
}


@Component({
  selector: 'app-payment-pix-dialog',
  standalone: true,
  imports: [DIALOG],
  templateUrl: './payment-pix-dialog.component.html',
  styleUrl: './payment-pix-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentPixDialogComponent {
  readonly dialogRef = inject(MatDialogRef<PaymentPixDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  #snackbarService = inject(SnackbarService);
  themeColor = this.data.themeColor;

  pixKeyToPast = '00020126330014br.gov.bcb.pix01111335366962052040000530398654040.805802BR5919NOME6014CIDADE62580520LKH2021102118215467250300017br.gov.bcb.brcode01051.0.063044D24'

  share() {
    navigator.clipboard.writeText(this.pixKeyToPast).then(
      () => {
        this.#snackbarService.showSuccess('URL copiada para a área de transferência com sucesso!')
      },
      () => {
        this.#snackbarService.showError('Não foi possível copiar para a área de transferência.')
      }
    );
  }

  onConfirm(): void {
    this.dialogRef.close();
  }
}
