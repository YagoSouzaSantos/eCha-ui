import { MatButtonModule } from "@angular/material/button";
import { VerticalCardComponent } from "../../material/vertical-card/vertical-card.component";
import { ProfilePictureComponent } from "../profile-picture/profile-picture.component";
import { SummaryDataComponent } from "./summary-data/summary-data.component";
import { TopContributorsComponent } from "./top-contributors/top-contributors.component";
import { ThemeColorDirective } from "../../../core/diretives/themeColor.directive";
import { MatTooltipModule } from "@angular/material/tooltip";

export const SUMMARY = [
  VerticalCardComponent, TopContributorsComponent, ProfilePictureComponent, MatButtonModule, SummaryDataComponent,ThemeColorDirective, MatTooltipModule
]
