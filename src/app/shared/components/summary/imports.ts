import { MatButton } from "@angular/material/button";
import { VerticalCardComponent } from "../../material/vertical-card/vertical-card.component";
import { ProfilePictureComponent } from "../profile-picture/profile-picture.component";
import { SummaryDataComponent } from "./summary-data/summary-data.component";
import { TopContributorsComponent } from "./top-contributors/top-contributors.component";

export const SUMMARY = [
  VerticalCardComponent, TopContributorsComponent, ProfilePictureComponent, MatButton, SummaryDataComponent
]
