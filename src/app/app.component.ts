import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopNavComponent } from "./core/layout/top-nav/top-nav.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './modules/auth/components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LoginComponent, TopNavComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','/src/styles/colors.scss']
})
export class AppComponent {
  bgColorTheme = 'green';
}
