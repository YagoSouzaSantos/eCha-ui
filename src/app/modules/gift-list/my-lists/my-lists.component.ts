import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProfilePictureComponent } from '../../../shared/material/profile-picture/profile-picture.component';
import { VerticalCardComponent } from '../../../shared/material/vertical-card/vertical-card.component';
import { SmoothBackGroundDirective } from '../../../core/diretives/smoothBackGround.directive';


@Component({
  selector: 'app-my-lists',
  standalone: true,
  imports: [VerticalCardComponent, ProfilePictureComponent, CommonModule, MatIconModule, MatListModule, SmoothBackGroundDirective],
  templateUrl: './my-lists.component.html',
  styleUrl: './my-lists.component.scss'
})
export class MyListsComponent {

  smoothColor= 'gray'

  listColor: string = '115, 190, 115';
  link='meuovo'

}
