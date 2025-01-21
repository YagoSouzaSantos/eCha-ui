import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-tea',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatIcon],
  templateUrl: './find-tea.component.html',
  styleUrl: './find-tea.component.scss'
})
export class FindTeaComponent {
  private router = inject(Router)

  navigateToDonation(key: string): void {
    if (key) {
      this.router.navigate(['/donation', key]);
    }
  }
}
