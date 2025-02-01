import { Component, inject, Input } from '@angular/core';
import { TOPNAV } from './imports';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [TOPNAV],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  @Input({ required: true }) r_themeColor!: string;
  @Input() extendedBackground: boolean = false;
  @Input() defaltLogoTemplate: boolean = true;
  @Input() user: boolean = false;

  #router = inject(Router)

  onExit() {
    this.#router.navigate(['/home']);
  }

  getBalance() { }
}
