import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignInComponent } from "./features/login/components/sign-in/sign-in.component";
import { TopNavComponent } from "./core/layout/top-nav/top-nav.component";
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SignInComponent, TopNavComponent, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','/src/styles/colors.scss']
})
export class AppComponent {
  bgColorTheme = 'green';
}
