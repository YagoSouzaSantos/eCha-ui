import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary-data',
  standalone: true,
  imports: [],
  templateUrl: './summary-data.component.html',
  styleUrl: './summary-data.component.scss'
})
export class SummaryDataComponent {
  @Input({required: true}) r_message!: string | null;
}
