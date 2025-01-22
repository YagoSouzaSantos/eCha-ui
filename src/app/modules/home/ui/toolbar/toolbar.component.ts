import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfilePictureComponent } from "../../../../shared/components/profile-picture/profile-picture.component";
import { SidenavMenuService } from '../../Services/sidenav-menu.service';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, ProfilePictureComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  user: any
  #sidenavMenuService = inject(SidenavMenuService)
  #snackbarService = inject(SnackbarService);

  alert(): void {
    this.#snackbarService.showAlert('Método não implementado!');
  }

  toggleUserSidenav() {
    this.#sidenavMenuService.toggleSidenav();
  }
}
