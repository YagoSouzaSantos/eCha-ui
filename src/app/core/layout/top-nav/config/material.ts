import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

export const TopNavImports = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  RouterLink,
  AsyncPipe
]
