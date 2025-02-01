import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../../../../core/interfaces/item';
import { DIALOG } from '../../imports';

export interface DialogData {
  themeColor: string;
  item: Item;
}

interface PaymentData {
  method: string;
  amount: number;
  cardDetails?: {
    number: string;
    expiry: string;
    cvv: string;
    holder: string;
    installments: number;
  };
  pixDetails?: {
    payerName: string;
  };
}

@Component({
  selector: 'app-payment-dialog',
  standalone: true,
  imports: [DIALOG],
  templateUrl: './payment-dialog.component.html',
  styleUrl: './payment-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDialogComponent {
  readonly dialogRef = inject(MatDialogRef<PaymentDialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  selectedOption: string = '1';
  customValue: number = this.data.item.remainingValue;

  cardDetails = {
    number: '',
    expiry: '',
    cvv: '',
    holder: '',
    installments: 1
  };

  pixDetails = {
    payerName: ''
  };

  installments = Array.from({ length: 10 }, (_, i) => i + 1);

  confirmPayment() {
    const paymentData: PaymentData = {
      method: this.selectedOption === '1' ? 'total' : 'custom',
      amount: this.selectedOption === '1' ? this.data.item.remainingValue : this.customValue,
    };

    if (this.selectedOption === '1' || this.selectedOption === '2') {
      console.log("Pagamento: ", paymentData);
    }

    if (this.cardDetails.number) {
      paymentData.cardDetails = { ...this.cardDetails };
      console.log("Detalhes do Cartão: ", paymentData.cardDetails);
    }

    if (this.pixDetails.payerName) {
      paymentData.pixDetails = { ...this.pixDetails };
      console.log("Detalhes do PIX: ", paymentData.pixDetails);
    }

    this.dialogRef.close(paymentData);
  }


  allowOnlyNumbers(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (allowedKeys.indexOf(event.key) !== -1 || /^[0-9]$/.test(event.key)) {
      return; // Permite a tecla ou número
    }
    event.preventDefault(); // Previne a entrada de qualquer outro caractere
  }

  formatExpiryDate() {
    const value = this.cardDetails.expiry.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length > 4) {
      this.cardDetails.expiry = value.slice(0, 4); // Limita a 4 dígitos
    } else if (value.length >= 2) {
      this.cardDetails.expiry = value.slice(0, 2) + '/' + value.slice(2, 4); // Formata para MM/AA
    } else {
      this.cardDetails.expiry = value; // Se tiver menos de 2 dígitos, não formata
    }
  }


  formatCardNumber() {
    this.cardDetails.number = this.cardDetails.number.replace(/\D/g, '').slice(0, 16);
  }

  formatCVV() {
    this.cardDetails.cvv = this.cardDetails.cvv.replace(/\D/g, '').slice(0, 3);
  }


    // Método para verificar a validação do formulário
    isFormValid(): boolean {
      const isCardPayment = this.selectedOption === '1' || (this.selectedOption === '2' && this.customValue > 0);

      const cardValid = this.isCardDetailsValid();
      const pixValid = this.isPixDetailsValid();

      return isCardPayment ? cardValid : pixValid;
    }

    // Validação dos detalhes do cartão
    private isCardDetailsValid(): boolean {
      return (
        this.cardDetails.number.length === 16 &&
        /^[0-9]{2}\/[0-9]{2}$/.test(this.cardDetails.expiry) &&
        this.cardDetails.cvv.length === 3 &&
        this.cardDetails.holder.trim().length > 0 &&
        this.cardDetails.installments > 0
      );
    }

    // Validação dos detalhes do PIX
    private isPixDetailsValid(): boolean {
      return this.pixDetails.payerName.trim().length > 0;
    }
}
