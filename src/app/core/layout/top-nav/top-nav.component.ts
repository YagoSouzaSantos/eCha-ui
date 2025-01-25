import { Component, Input } from '@angular/core';

import { TopNavImports } from './config/material';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [TopNavImports],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss', '/src/styles/colors.scss']
})
export class TopNavComponent {


  @Input() btn_enter: boolean = false;
  @Input() btn_createYourTea: boolean = false;
  @Input() defaltLogoTemplate: boolean = true;


  user$ : any;

  logout() {

  }
}
