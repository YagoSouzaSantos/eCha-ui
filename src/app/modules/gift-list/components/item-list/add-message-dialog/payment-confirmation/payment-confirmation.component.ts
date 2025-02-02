import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DIALOG } from '../../../imports';

@Component({
  selector: 'app-payment-confirmation',
  standalone: true,
  imports: [DIALOG],
  templateUrl: './payment-confirmation.component.html',
  styleUrl: './payment-confirmation.component.scss'
})
export class PaymentConfirmationComponent {
  @Input({ required: true }) r_themeColor!: string;
  @Output() messageRead = new EventEmitter<string>();

  submitEvent(): void {
    this.messageRead.emit();
  }
}
