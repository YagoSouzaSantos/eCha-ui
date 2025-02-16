import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { ThemeColorDirective } from '../../core/diretives/themeColor.directive';
import { GiftList } from '../../core/interfaces/gift-list';
import { MinimalistFooterComponent } from "../../core/layout/minimalist-footer/minimalist-footer.component";
import { AuthenticationService } from '../../core/services/authentication.service';
import { GiftListService } from '../../core/services/gift-list.service';
import { FilterComponent } from "../../shared/components/filter/filter.component";
import { CardComponent } from "./components/card/card.component";
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSidenavModule, ToolbarComponent, MinimalistFooterComponent, FilterComponent,MatProgressBarModule,
    MatIconModule, MatListModule, RouterLink, MatButtonModule, ThemeColorDirective, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{
  #giftListService = inject(GiftListService);
  #authenticationService = inject(AuthenticationService);
  giftLists$ = signal<GiftList[] | null>(null);
  filteredGiftLists$ = signal<GiftList[] | null>(null);
  filterValue: string = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.getGiftLists();
    }, 2000);
  }

  getGiftLists() {
    this.#giftListService.getAllGiftLists().subscribe({
      next: (giftLists) => {
        const userId = this.#authenticationService.getUser()?.id;
        const userGiftLists = giftLists.filter(giftList => giftList.userId === userId);
        this.giftLists$.set(userGiftLists);
        this.filteredGiftLists$.set(userGiftLists);
      },
      error: (error) => {
        console.error('Error fetching gift lists:', error);
      }
    });
  }

  onFilter(value: string): void {
    this.filterValue = value;

    const allGiftLists = this.giftLists$();

    if (!allGiftLists) return;

    if (!value.trim()) {
      this.filteredGiftLists$.set(allGiftLists);
    } else {
      const filtered = allGiftLists.filter(giftList =>
        giftList.title.toLowerCase().includes(value.toLowerCase())
      );
      this.filteredGiftLists$.set(filtered);
    }
  }

  getUser(): User{
    return this.#authenticationService.getUser();
  }
}
