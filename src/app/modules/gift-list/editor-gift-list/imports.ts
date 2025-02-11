import { CommonModule } from "@angular/common";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MinimalistFooterComponent } from "../../../core/layout/minimalist-footer/minimalist-footer.component";
import { TopNavComponent } from "../../../core/layout/top-nav/top-nav.component";
import { SummaryComponent } from "../../../shared/components/summary/summary.component";
import { ItemListComponent } from "../components/item-list/item-list.component";
import { EvolutionBarComponent } from "../../../shared/components/evolution-bar/evolution-bar.component";


export const EDITOR_GIFT_LIST = [
  MinimalistFooterComponent, TopNavComponent, SummaryComponent, EvolutionBarComponent, ItemListComponent, MatProgressBarModule, CommonModule
]
