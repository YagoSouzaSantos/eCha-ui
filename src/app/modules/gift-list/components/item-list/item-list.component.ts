import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
    @Input({ required: true }) r_themeColor!: string;
}
