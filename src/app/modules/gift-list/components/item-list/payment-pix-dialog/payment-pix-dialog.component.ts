import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contribution } from '../../../../../core/interfaces/contribution';
import { SnackbarService } from '../../../../../shared/services/snackbar.service';
import { DIALOG } from '../../imports';

export interface DialogData {
  themeColor: string;
  payment: Contribution;
  userId: number;
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
  pixKeyToPast: string = '';

  constructor() {
    this.generatePixKey();
  }

  private async generatePixKey() {
    try {
      this.pixKeyToPast = this.createPixCode('99999999999', this.data.payment.value); // chave genérica
    } catch (error) {
      this.#snackbarService.showError('Erro ao gerar chave Pix.');
      console.error(error);
    }
  }

  private createPixCode(pixKey: string, value: number): string {
    return `00020126330014br.gov.bcb.pix0114${pixKey}5204000053039865404${value.toFixed(2).replace('.', '')}5802BR5919NOME6014CIDADE62580520LKH2021102118215467250300017br.gov.bcb.brcode01051.0.063044D24`;
  }

  share() {
    navigator.clipboard.writeText(this.pixKeyToPast).then(
      () => {
        this.#snackbarService.showSuccess('Chave Pix copiada para a área de transferência com sucesso!');
      },
      () => {
        this.#snackbarService.showError('Não foi possível copiar para a área de transferência.');
      }
    );
  }

  onConfirm(): void {
    this.dialogRef.close(this.data.payment);
  }
}
