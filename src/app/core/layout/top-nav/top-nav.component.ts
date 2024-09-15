import { Component, inject } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { TopNavImports } from './config/material';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [TopNavImports],
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss', '/src/styles/colors.scss']
})
export class TopNavComponent {
  private authService = inject(AuthService)
  user$ = this.authService.user();

  logout() {
    this.authService.logout()
  }
}
