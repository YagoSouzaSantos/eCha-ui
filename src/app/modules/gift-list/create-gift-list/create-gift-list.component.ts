import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { BackgroundCardComponent } from "../../../shared/components/customizable-background/customizable-background.component";
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { GiftListService } from './data-access/gift-list.service';
import { GiftList } from './../../../core/interfaces/gift-list';
import { FormComponent } from "./components/form/form.component";


@Component({
  selector: 'app-create-gift-list',
  standalone: true,
  imports: [
    BackgroundCardComponent,
    MatCard,
    FormComponent
],
  templateUrl: './create-gift-list.component.html',
  styleUrls: ['./create-gift-list.component.scss']
})
export class CreateGiftListComponent {

  protected giftListService = inject(GiftListService);
  protected snackbarService = inject(SnackbarService);

  submitForm(form: GiftList) {
    this.giftListService.saveGiftList(form);
  }
}
