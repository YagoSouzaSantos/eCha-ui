import { ProfilePictureComponent } from './../../../../shared/material/profile-picture/profile-picture.component';
import { MatButtonModule } from '@angular/material/button';
import { Component, inject, input } from '@angular/core';
import { AuthService, AuthUser } from '../../../../core/services/auth.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-menu',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIconModule, ProfilePictureComponent],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss'
})
export class SidenavMenuComponent {
  user = input.required<AuthUser>( {alias: 'r_user'});
  private authService = inject(AuthService)

  logout() {
    this.authService.logout()
  }
}
