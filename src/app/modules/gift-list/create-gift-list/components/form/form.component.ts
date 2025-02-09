import { Component, effect, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GiftList } from '../../../../../core/interfaces/gift-list';
import { BackgroundService } from '../../../../../shared/services/background.service';
import { FormValidation } from '../../../../../shared/utils/form-validation';
import { creationForm } from '../../utils/form-functions';
import { IMPORTS } from './form-imports';
import { AuthenticationService } from '../../../../../core/services/authentication.service';
import { ProfilePictureDialog } from '../../../../../shared/interfaces/profile-picture-dialog';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [IMPORTS],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() form = new EventEmitter<GiftList>()

  #backgroundService = inject(BackgroundService)
  #authenticationService = inject(AuthenticationService);
  private fb = inject(FormBuilder)

  currentTheme!: string;
  creationForm!: FormGroup

  constructor() {
    effect(() => {
      this.currentTheme = this.#backgroundService.getBgColorSignal()();
    });
  }

  ngOnInit(): void {
    this.creationForm = creationForm(this.fb, this.#authenticationService);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    let giftList: GiftList = this.creationForm.getRawValue();
    this.form.emit(giftList);
  }

  getErrorMessage(controlName: string): string {
    const control = this.creationForm.get(controlName);
    return FormValidation.getErrorMessage(control);
  }

  onImageDataChange(imageData: ProfilePictureDialog): void {
    this.creationForm.patchValue({
      image: imageData.image
    });
  }

  onColorChange(color: string): void {
    this.creationForm.patchValue({
      highlightColor: color
    });
  }

  readonly fonts: { fontId: number; name: string }[] = [
    { fontId: 1, name: 'Tipografia 1' },
    { fontId: 2, name: 'Tipografia 2' },
    { fontId: 3, name: 'Tipografia 3' }
  ];


}
