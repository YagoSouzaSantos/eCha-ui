import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthUser } from '../../../../core/services/auth.service';
import { ProfilePictureComponent } from "../../../../shared/material/profile-picture/profile-picture.component";
import { SidenavMenuService } from '../../Services/sidenav-menu.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, ProfilePictureComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  user = input.required<AuthUser>( {alias: 'r_user'});
  protected sidenavMenuService = inject(SidenavMenuService)


  toggleUserSidenav() {
    this.sidenavMenuService.toggleSidenav();
  }
}
