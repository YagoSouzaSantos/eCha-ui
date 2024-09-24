import { AsyncPipe } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { ThemeColorDirective } from '../../core/diretives/themeColor.directive';
import { MinimalistFooterComponent } from "../../core/layout/minimalist-footer/minimalist-footer.component";
import { AuthService } from '../../core/services/auth.service';
import { SidenavMenuComponent } from "./ui/sidenav-menu/sidenav-menu.component";
import { ToolbarComponent } from "./ui/toolbar/toolbar.component";
import { SidenavMenuService } from './Services/sidenav-menu.service';

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

  @ViewChild('drawerSub') sidenav!: MatSidenav;

  constructor (private sidenavMenuService: SidenavMenuService) {
  }

  ngAfterViewInit(): void {
    this.sidenavMenuService.setSidenav(this.sidenav);
  }
}
