import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { ThemeColorDirective } from '../../../diretives/themeColor.directive';


export const TopNavImports = [
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  RouterLink,
  AsyncPipe,
  ThemeColorDirective
]
