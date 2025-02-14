import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../core/interfaces/user';
import { AuthenticationService } from '../../core/services/authentication.service';
import { ToolbarComponent } from '../home/components/toolbar/toolbar.component';

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, ToolbarComponent],
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageProfileComponent {
  #authenticationService = inject(AuthenticationService);
  form: FormGroup;
  user!: User;

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required], // Validação para o campo nome
      email: [{ value: '', disabled: true }, Validators.required], // Campo de e-mail desabilitado
      cpf: ['', Validators.required], // Validação para o campo CPF
      pixKey: [''], // Campo Pix Key, sem validação
      phone: ['', Validators.required], // Validação para o campo telefone
      image: ['', Validators.required] // Validação para o campo imagem
    });
  }

  ngOnInit(): void {
    this.user = this.getUser(); // Obtém o usuário ao iniciar o componente
    this.initializeForm(); // Inicializa o formulário com os valores do usuário
  }

  getUser(): User {
    return this.authenticationService.getUser();
  }

  initializeForm(): void {
    // Preenche o formulário com os valores do usuário
    this.form.patchValue({
      name: this.user.name, // Assume que o objeto User tem uma propriedade 'name'
      email: this.user.email, // Assume que o objeto User tem uma propriedade 'email'
      cpf: this.user.cpf, // Assume que o objeto User tem uma propriedade 'cpf'
      pixKey: this.user.pixKey, // Assume que o objeto User tem uma propriedade 'pixKey'
      phone: this.user.contactNumber, // Assume que o objeto User tem uma propriedade 'phone'
      image: this.user.profileImage // Assume que o objeto User tem uma propriedade 'image'
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const updatedUser = this.form.value; // Captura os valores do formulário
      // Aqui você pode chamar um serviço para atualizar o usuário
      console.log('User updated:', updatedUser);
    }
  }
}
