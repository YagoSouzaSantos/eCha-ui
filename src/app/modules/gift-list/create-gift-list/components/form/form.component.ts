import { Component, inject } from '@angular/core';
import { createNewGiftListForm } from '../../utils/form-functions';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePictureComponent } from '../../../../../shared/material/profile-picture/profile-picture.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectColorComponent } from '../select-color/select-color.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    SelectColorComponent,
    ProfilePictureComponent,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,

  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  img = 'https://s3-alpha-sig.figma.com/img/f575/8403/fce24b1aecbceb6f321309074ece69fe?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbyLe53nFzvS1aA10dcWGEEaTBIhUDbjCBsMmnMfzJWZGw4FUPcj~jf73KBsc8KgDnpD0H01LiYitExKUzsazpH8j0zhaO1e7JIXBVAISbH4VTWAbUbHKATnXrR9qEqywk8oa7pp6KuZALQlboloxRcVzcu5XGo22hRwtTgMPXcEXlryybcG4-EtH2GyxY1n9kLToeSRsrY6~qfCGNPhGcy54st6V1XPPiiJ-EiR2OuXbDVr346Jj~PsbfMFiM7a0K74Gyc1Iob-mGrM5jVf-7rn5Lp37jbultqQVCohghldLPPACuWeEzYAeLXdJA3BBHzB96CuRVx9grTHfVM5sg__';

  readonly bestBoys: string[] = ['Tipografia 1', 'Tipografia 2', 'Tipografia 3'];


  // @Output() login = new EventEmitter<Credentials>()
  private fb = inject(FormBuilder)
  newGiftListForm!: FormGroup

  ngOnInit(): void {
    this.newGiftListForm = createNewGiftListForm(this.fb);
  }


}
