import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { BackgroundCardComponent } from "../../../shared/components/customizable-background/customizable-background.component";
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

}
