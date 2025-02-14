import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG } from '../../imports';
import { SnackbarService } from '../../../../../shared/services/snackbar.service';
import { AuthenticationService } from '../../../../../core/services/authentication.service';

export interface DialogData {
  themeColor: string;
  value: number;
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
  #authenticationService = inject(AuthenticationService);

  themeColor = this.data.themeColor;
  pixKeyToPast: string = '';

  constructor() {
    this.generatePixKey();
  }

  private async generatePixKey() {
    try {
      const user = this.#authenticationService.getUser();
      if (!user || !user.pixKey) {
        this.#snackbarService.showAlert('Chave Pix não encontrada.');
      }
      this.pixKeyToPast = this.createPixCode(user.pixKey, this.data.value);
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
    this.dialogRef.close();
  }
}
