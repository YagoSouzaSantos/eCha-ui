import { Component, OnInit } from '@angular/core';
import { VerticalCardComponent } from '../../../shared/material/vertical-card/vertical-card.component';

@Component({
  selector: 'app-create-gift-list',
  standalone: true,
  imports: [VerticalCardComponent],
  templateUrl: './create-gift-list.component.html',
  styleUrls: ['./create-gift-list.component.scss']
})
export class CreateGiftListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
