import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../core/interfaces/user';
import { AuthenticationService } from '../../core/services/authentication.service';
import { UserService } from '../../core/services/user.service';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { MANAGE_PROFILE } from './imports';

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [MANAGE_PROFILE],
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageProfileComponent {
  #authenticationService = inject(AuthenticationService);
  #snackbarService = inject(SnackbarService);
  #userService = inject(UserService);
  #router = inject(Router);
  #fb = inject(FormBuilder);
  form: FormGroup;
  user!: User;

  constructor() {
    this.form = this.#fb.group({
      id: [''],
      name: ['', Validators.required],
      email: [{ value: '', disabled: true }, [Validators.required]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      pixKey: [''],
      contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]],
      profileImage: ['']
    });
  }

  ngOnInit(): void {
    this.user = this.getUser();
    this.initializeForm();

    this.form.get('phone')?.valueChanges.subscribe(value => {
      this.form.patchValue({ phone: this.formatPhone(value) }, { emitEvent: false });
    });
  }

  getUser(): User {
    return this.#authenticationService.getUser();
  }

  onImageChange(event: { image: string }) {
    this.form.patchValue({ profileImage: event.image });
  }

  initializeForm(): void {
    this.form.patchValue({
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      cpf: this.user.cpf,
      pixKey: this.user.pixKey,
      contactNumber: this.user.contactNumber,
      profileImage: this.user.profileImage
    });
  }

  onSave(): void {
    if (this.form.valid) {
      this.form.get('email')?.enable();

      const updatedUser: User = this.form.value;
      updatedUser.statusUserId = 1;

      this.#userService.updateUser(this.user.id, updatedUser).subscribe(
        () => {
          this.#authenticationService.updateUserProfileImage(updatedUser.profileImage);
          this.#snackbarService.showSuccess('Usuário atualizado com sucesso.');
          this.#router.navigate(['/home']);
        },
        () => this.#snackbarService.showError('Não foi possível atualizar usuário')
      );

      this.form.get('email')?.disable();
    }
  }


  formatPhone(value: string): string {
    if (!value) return '';

    let cleaned = value.replace(/\D/g, '');

    if (cleaned.length <= 10) {
      return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
    } else {
      return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
    }
  }
}
