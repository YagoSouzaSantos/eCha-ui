import { Component, Input } from '@angular/core';
import { ICONS } from '../../icons/phosphoricons';


@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss'
})
export class ProfilePictureComponent {
  icons = ICONS;

  @Input() imageUrl!: string;
  @Input() size: number = 100;
  @Input({ required: true }) r_editable!: boolean;

}
