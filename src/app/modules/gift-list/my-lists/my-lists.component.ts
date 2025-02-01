import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from "./card/card.component";


@Component({
  selector: 'app-my-lists',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, RouterLink, MatButtonModule, CardComponent],
  templateUrl: './my-lists.component.html',
  styleUrl: './my-lists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyListsComponent {


}
