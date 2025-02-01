import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { EvolutionBarComponent } from "./item-list/item-card/evolution-bar/evolution-bar.component";
import { MatDialogModule } from "@angular/material/dialog";
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ThemeColorDirective } from '../../../core/diretives/themeColor.directive';

export const DIALOG = [
  MatExpansionModule, MatCardModule, MatButtonModule, EvolutionBarComponent, CommonModule, MatDialogModule, MatRadioModule, MatFormFieldModule, FormsModule,
  MatInputModule, MatOptionModule, MatSelectModule,MatDatepickerModule,MatNativeDateModule, ThemeColorDirective
]
