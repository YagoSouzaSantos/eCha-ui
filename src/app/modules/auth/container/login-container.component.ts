import { TopnavService } from '../../../core/layout/top-nav/services/topnav.service';
import { Component, inject, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, RouterOutlet],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent implements OnInit {
  topnavService = inject(TopnavService)

  ngOnInit(): void {
    this.topnavService.configureTopNavBar(false,'start','default');
  }

}
