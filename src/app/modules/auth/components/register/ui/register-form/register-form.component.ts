import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Credentials } from '../../../../../../shared/interfaces/credentials';
import { FormValidation } from '../../../../../../shared/utils/form-validation';
import { createRegisterForm } from '../../../../config/form-functions';
import { MATERIAL } from '../../../../config/imports';
import { SnackbarService } from '../../../../../../shared/services/snackbar.service';
import { Register } from '../../../../../../shared/interfaces/register';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [MATERIAL, RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  #fb = inject(FormBuilder)
  #snackbarService = inject(SnackbarService);
  registerForm!: FormGroup
  hide = true;

  @Output() register = new EventEmitter<Register>()

  ngOnInit(): void {
    this.registerForm = createRegisterForm(this.#fb);
  }

  getErrorMessage(controlName: string): string {
    const control = this.registerForm.get(controlName);
    return FormValidation.getErrorMessage(control);
  }

  onSubmit(event: Event) {
    if (this.registerForm.invalid)
      this.#snackbarService.showError('Formulário inválido');
    else {
      event.preventDefault();
      const register: Register = this.registerForm.getRawValue();
      this.register.emit(register);
    }
  }
}
