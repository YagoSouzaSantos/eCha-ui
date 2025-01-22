import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ProfilePictureComponent } from '../../../../shared/components/profile-picture/profile-picture.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AuthGoogleService } from '../../../auth/data-access/auth-google.service';

@Component({
  selector: 'app-sidenav-menu',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule, MatIconModule, ProfilePictureComponent],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.scss'
})
export class SidenavMenuComponent {
  user: any;
  #authGoogleService = inject(AuthGoogleService);

  logout() {

  }
}
