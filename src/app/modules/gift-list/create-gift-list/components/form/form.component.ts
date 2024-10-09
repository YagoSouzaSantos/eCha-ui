import { Component, effect, EventEmitter, inject, Output } from '@angular/core';
import { createNewGiftListForm } from '../../utils/form-functions';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilePictureComponent } from '../../../../../shared/components/profile-picture/profile-picture.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectColorComponent } from '../select-color/select-color.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { SmoothBackGroundDirective } from '../../../../../core/diretives/smoothBackGround.directive';
import { BackgroundService } from '../../../../../shared/services/background.service';
import { TextColorDirective } from '../../../../../core/diretives/textColor.directive';
import { GiftList } from '../../../../../core/interfaces/gift-list';
import { FormValidation } from '../../../../../shared/utils/form-validation';
import { SnackbarService } from '../../../../../shared/services/snackbar.service';

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
    SmoothBackGroundDirective,
    TextColorDirective
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  protected backgroundService = inject(BackgroundService)
  private snackbarService = inject(SnackbarService);
  private fb = inject(FormBuilder)

  @Output() form = new EventEmitter<GiftList>()

  newGiftListForm!: FormGroup

  constructor() {
    effect(() => {
      this.actionColor = this.backgroundService.getMessageSignal()();
      console.log('this.actionColor: ', this.actionColor);
    });
  }

  ngOnInit(): void {
    this.newGiftListForm = createNewGiftListForm(this.fb);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const newGiftList: GiftList = this.newGiftListForm.getRawValue();
    this.form.emit(newGiftList);
  }

  getErrorMessage(controlName: string): string {
    const control = this.newGiftListForm.get(controlName);
    return FormValidation.getErrorMessage(control);
  }

  // a se trabalhar

  img!: string;

  readonly bestBoys: string[] = ['Tipografia 1', 'Tipografia 2', 'Tipografia 3'];

  actionColor: string = 'green';

}
