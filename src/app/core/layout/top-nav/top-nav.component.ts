import { Component, Input } from '@angular/core';

import { TopNavImports } from './config/material';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [TopNavImports],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  @Input() user: boolean = false;
  @Input() defaltLogoTemplate: boolean = true;
  @Input({required: true}) r_themeColor!: string;
  @Input() extendedBackground: boolean = false;

  user$ : any;

  logout() { }

  getBalance() { }
}
