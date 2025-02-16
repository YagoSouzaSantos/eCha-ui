import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { SmoothBackGroundDirective } from "../../core/diretives/smoothBackGround.directive";
import { TextColorDirective } from "../../core/diretives/textColor.directive";
import { MinimalistFooterComponent } from "../../core/layout/minimalist-footer/minimalist-footer.component";
import { TopNavComponent } from "../../core/layout/top-nav/top-nav.component";
import { BulletinBoardEvolutionBarComponent } from "./bulletin-board-evolution-bar/bulletin-board-evolution-bar.component";
import { HostMessageComponent } from "./host-message/host-message.component";
import { MessagesComponent } from "./messages/messages.component";
import { ProfilePictureComponent } from "../../shared/components/profile-picture/profile-picture.component";
import { ThemeColorDirective } from "../../core/diretives/themeColor.directive";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

export const BULLETIN_BOARD_SHARED = [
  MatButtonModule, SmoothBackGroundDirective
]
export const BULLETIN_BOARD_IMPORTS = [
  MinimalistFooterComponent, BulletinBoardEvolutionBarComponent, HostMessageComponent, MessagesComponent, TopNavComponent
]
export const MESSAGES = [
  CommonModule, TextColorDirective
]
export const HOST_MESSAGE = [
  ProfilePictureComponent
]
export const BULLETIN_BOARD_DIALOG = [
  MatCardModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule,
  FormsModule, ThemeColorDirective, MatButtonModule
]
