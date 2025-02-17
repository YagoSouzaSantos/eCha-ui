import { MinimalistFooterComponent } from './../../core/layout/minimalist-footer/minimalist-footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { ToolbarComponent } from "../home/components/toolbar/toolbar.component";
import { ProfilePictureComponent } from "../../shared/components/profile-picture/profile-picture.component";
import { ThemeColorDirective } from "../../core/diretives/themeColor.directive";

export const MANAGE_PROFILE = [
  ReactiveFormsModule, FormsModule, MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, ToolbarComponent, RouterLink, ProfilePictureComponent,
  ThemeColorDirective, MinimalistFooterComponent
]
