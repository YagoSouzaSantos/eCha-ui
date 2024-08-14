import { Component, signal } from '@angular/core';
import { MATERIAL } from '../imports/imports';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [MATERIAL, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  hide = true;
}

