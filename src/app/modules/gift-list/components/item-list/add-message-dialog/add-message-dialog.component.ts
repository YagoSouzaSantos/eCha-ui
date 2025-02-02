import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DIALOG } from '../../imports';
import { PaymentConfirmationComponent } from "./payment-confirmation/payment-confirmation.component";
import { ICON_LIST } from '../../../../../core/constants/icon-list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../../shared/services/snackbar.service';

export interface DialogData {
  eventDate: string;
  themeColor: string;
  creatorName: string
}

@Component({
  selector: 'app-add-message-dialog',
  standalone: true,
  imports: [DIALOG, PaymentConfirmationComponent],
  templateUrl: './add-message-dialog.component.html',
  styleUrl: './add-message-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddMessageDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddMessageDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  #snackbarService = inject(SnackbarService);

  messageRead: boolean;
  messageForm: FormGroup;
  selectedIcon: string = 'ph ph-heart';
  iconList = ICON_LIST;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', Validators.required],
      icon: ['ph ph-heart']
    });
    this.messageRead = false;
  }

  onMessageRead() {
    this.messageRead = true;
  }

  onConfirm(): void {
    this.dialogRef.close();
  }

  selectIcon(icon: string): void {
    this.selectedIcon = icon;
    this.messageForm.patchValue({ icon });
  }

  saveMessage(): void {
    if (this.messageForm.valid) {
      this.#snackbarService.showAlert('Método não implementado')
      console.log('Formulário enviado:', this.messageForm.value);
      this.dialogRef.close();
    }
  }
}
