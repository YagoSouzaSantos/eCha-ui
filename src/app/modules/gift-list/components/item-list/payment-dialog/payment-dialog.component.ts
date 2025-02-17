import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../../../../core/interfaces/item';
import { Contribution } from '../../../../../core/interfaces/contribution';
import { DIALOG } from '../../imports';

export interface DialogData {
  themeColor: string;
  item: Item;
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

  customValue: number = this.data?.item?.remainingValue ?? 0;
  remainingValue: number = (this.data.item?.totalValue ?? 0) - (this.data?.item?.valueCollected ?? 0);
  email: string = '';
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
    const paymentData: Contribution = {
      itemId: this.data.item.id,
      value: this.selectedOption === '1' ? this.remainingValue : this.customValue,
      contributorEmail: this.email,
      isVisible: true
    };

    // if (this.selectedOption === '1' || this.selectedOption === '2') {
    //   console.log("Pagamento: ", paymentData);
    // }

    if (this.cardDetails.number) {
      paymentData.cardDetails = { ...this.cardDetails };
    }

    if (this.pixDetails.payerName) {
      paymentData.pixDetails = { ...this.pixDetails };
    }

    this.dialogRef.close(paymentData);
  }
  allowOnlyNumbers(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete'];
    if (allowedKeys.indexOf(event.key) !== -1 || /^[0-9]$/.test(event.key)) {
      return;
    }
    event.preventDefault();
  }

  formatExpiryDate() {
    const value = this.cardDetails.expiry.replace(/\D/g, '');
    if (value.length > 4) {
      this.cardDetails.expiry = value.slice(0, 4);
    } else if (value.length >= 2) {
      this.cardDetails.expiry = value.slice(0, 2) + '/' + value.slice(2, 4);
    } else {
      this.cardDetails.expiry = value;
    }
  }

  formatCardNumber() {
    this.cardDetails.number = this.cardDetails.number.replace(/\D/g, '').slice(0, 16);
  }

  formatCVV() {
    this.cardDetails.cvv = this.cardDetails.cvv.replace(/\D/g, '').slice(0, 3);
  }

  isFormValid(): boolean {
    if (!this.selectedOption) return false;

    const isAmountValid = this.selectedOption === '1' || (this.selectedOption === '2' && this.customValue > 0);

    if (this.isCreditCardSelected()) {
      return isAmountValid && this.isCardDetailsValid();
    } else if (this.isPixSelected()) {
      return isAmountValid && this.isPixDetailsValid();
    }

    return false;
  }

  private isCardDetailsValid(): boolean {
    return (
      this.cardDetails.number.length === 16 &&
      /^[0-9]{2}\/[0-9]{2}$/.test(this.cardDetails.expiry) &&
      this.cardDetails.cvv.length === 3 &&
      this.cardDetails.holder.trim().length > 0 &&
      this.cardDetails.installments > 0
    );
  }

  private isPixDetailsValid(): boolean {
    return this.pixDetails.payerName.trim().length > 0;
  }

  private isCreditCardSelected(): boolean {
    return this.selectedOption !== '' && this.cardDetails.number !== '';
  }

  private isPixSelected(): boolean {
    return this.selectedOption !== '' && this.pixDetails.payerName !== '';
  }
}
