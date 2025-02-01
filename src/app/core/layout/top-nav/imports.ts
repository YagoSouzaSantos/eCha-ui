import { AsyncPipe, CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeColorDirective } from '../../diretives/themeColor.directive';
import { MatTooltipModule } from '@angular/material/tooltip';

export const TOPNAV = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  RouterLink,
  AsyncPipe,
  ThemeColorDirective,
  MatTooltipModule,
  CommonModule
]
