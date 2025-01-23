import { Component } from '@angular/core';
import { VerticalCardComponent } from '../../material/vertical-card/vertical-card.component';
import { TopContributorsComponent } from "./top-contributors/top-contributors.component";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [VerticalCardComponent, TopContributorsComponent],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {

}
