import { TopnavService } from '../../../core/layout/top-nav/services/topnav.service';
import { Component, inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { BackgroundCardComponent } from "../../../shared/components/background-card/background-card.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, RouterOutlet, BackgroundCardComponent],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent implements OnInit {
  topnavService = inject(TopnavService)

  ngOnInit(): void {
    this.topnavService.configureTopNavBar(false,'start','default');
  }

}
