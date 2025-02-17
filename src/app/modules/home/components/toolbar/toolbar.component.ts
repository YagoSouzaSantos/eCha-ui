import { ThemeColorDirective } from './../../../../core/diretives/themeColor.directive';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProfilePictureComponent } from "../../../../shared/components/profile-picture/profile-picture.component";
import { MatMenuModule } from '@angular/material/menu';

import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { User } from '../../../../core/interfaces/user';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthenticationService } from '../../../../core/services/authentication.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [ThemeColorDirective, MatToolbarModule, MatIconModule, MatButtonModule, ProfilePictureComponent, MatMenuModule, RouterLink, MatTooltipModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input({ required: true }) r_user!: User;

  #snackbarService = inject(SnackbarService);
  #authenticationService = inject(AuthenticationService);


  alert(): void {
    this.#snackbarService.showAlert('Método não implementado!');
  }

  logout() {
    this.#authenticationService.logout();
  }

}
