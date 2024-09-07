import { Component } from '@angular/core';
import { VerticalCardComponent } from "../../../shared/material/vertical-card/vertical-card.component";
import { ProfilePictureComponent } from "../../../shared/material/profile-picture/profile-picture.component";
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-gift-list',
  standalone: true,
  imports: [VerticalCardComponent, ProfilePictureComponent, CommonModule, MatIconModule, MatListModule],
  templateUrl: './gift-list.component.html',
  styleUrl: './gift-list.component.scss'
})
export class GiftListComponent {

  listColor: string = '115, 190, 115';
  link='meuovo'

}
