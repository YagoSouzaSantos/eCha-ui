import { Component, effect, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GiftList } from '../../../../../core/interfaces/gift-list';
import { CustomImageData } from '../../../../../shared/components/profile-picture/profile-picture.component';
import { BackgroundService } from '../../../../../shared/services/background.service';
import { FormValidation } from '../../../../../shared/utils/form-validation';
import { creationForm } from '../../utils/form-functions';
import { IMPORTS } from './form-imports';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [IMPORTS],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() form = new EventEmitter<GiftList>()

  protected backgroundService = inject(BackgroundService)
  private fb = inject(FormBuilder)

  currentTheme!: string;
  creationForm!: FormGroup

  constructor() {
    effect(() => {
      this.currentTheme = this.backgroundService.getBgColorSignal()();
    });
  }

  ngOnInit(): void {
    this.creationForm = creationForm(this.fb);
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

  onImageDataChange(imageData: CustomImageData): void {
    this.creationForm.patchValue({
      photo: imageData.base64Image,
      photoUrl: imageData.urlImage
    });
  }

  onColorChange(color: string): void {
    console.log(color);
    this.creationForm.patchValue({
    themeColor: color
  });
  }

  readonly bestBoys: string[] = ['Tipografia 1', 'Tipografia 2', 'Tipografia 3'];

}
