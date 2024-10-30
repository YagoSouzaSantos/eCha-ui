import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { SmoothBackGroundDirective } from '../../../core/diretives/smoothBackGround.directive';
import { AuthService } from '../../../core/services/auth.service';
import { ProfilePictureComponent } from '../../../shared/components/profile-picture/profile-picture.component';
import { VerticalCardComponent } from '../../../shared/material/vertical-card/vertical-card.component';
import { GiftListService } from '../data-access/gift-list.service';


@Component({
  selector: 'app-my-lists',
  standalone: true,
  imports: [VerticalCardComponent, ProfilePictureComponent, CommonModule, MatIconModule, MatListModule, SmoothBackGroundDirective, RouterLink, AsyncPipe],
  templateUrl: './my-lists.component.html',
  styleUrl: './my-lists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyListsComponent {
  private authService = inject(AuthService)
  protected giftListService = inject(GiftListService)

  protected user$ = this.authService.user();
  protected filteredList$ = this.giftListService.getFilteredList$




}
