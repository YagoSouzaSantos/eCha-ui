import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ThemeColorDirective } from '../../core/diretives/themeColor.directive';
import { MinimalistFooterComponent } from "../../core/layout/minimalist-footer/minimalist-footer.component";
import { AuthService } from '../../core/services/auth.service';
import { SidenavMenuComponent } from "./ui/sidenav-menu/sidenav-menu.component";
import { ToolbarComponent } from "./ui/toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, ThemeColorDirective, ToolbarComponent, AsyncPipe, SidenavMenuComponent, RouterOutlet, MinimalistFooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private authService = inject(AuthService)
  protected user$ = this.authService.user();

}
