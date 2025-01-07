import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-find-tea',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIcon],
  templateUrl: './find-tea.component.html',
  styleUrl: './find-tea.component.scss'
})
export class FindTeaComponent {

}
