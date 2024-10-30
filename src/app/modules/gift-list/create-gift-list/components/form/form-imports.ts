import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { SmoothBackGroundDirective } from "../../../../../core/diretives/smoothBackGround.directive";
import { TextColorDirective } from "../../../../../core/diretives/textColor.directive";
import { ProfilePictureComponent } from "../../../../../shared/components/profile-picture/profile-picture.component";
import { SelectColorComponent } from "../select-color/select-color.component";

export const IMPORTS = [
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  SelectColorComponent,
  ProfilePictureComponent,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  SmoothBackGroundDirective,
  TextColorDirective
]
