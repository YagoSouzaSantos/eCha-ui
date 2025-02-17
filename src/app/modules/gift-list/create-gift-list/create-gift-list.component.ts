import { Component, inject } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { GiftListService } from '../../../core/services/gift-list.service';
import { BackgroundCardComponent } from "../../../shared/components/customizable-background/customizable-background.component";
import { GiftList } from './../../../core/interfaces/gift-list';
import { FormComponent } from "./components/form/form.component";
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-gift-list',
  standalone: true,
  imports: [BackgroundCardComponent, MatCard, FormComponent
  ],
  templateUrl: './create-gift-list.component.html',
  styleUrls: ['./create-gift-list.component.scss']
})
export class CreateGiftListComponent {
  #giftListService = inject(GiftListService);
  #snackbarService = inject(SnackbarService);
  #router = inject(Router);

  submitForm(form: GiftList) {
    this.#giftListService.createGiftList(form).subscribe({
      next: (response) => this.processSuccess(response),
      error: () => {
        this.#snackbarService.showError('Não foi possível criar a lista de presentes.');
      },
    });
  }

  private processSuccess(response: GiftList): void {
    this.#snackbarService.showSuccess('Lista de presentes criada com sucesso');
    this.#router.navigate(['/editor', response.id]);
  }
}
