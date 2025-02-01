import { Component, inject, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MessageList } from '../../../../core/interfaces/MessageList ';
import { BulletinBoardStateService } from '../../../../modules/bulletin-board/services/bulletin-board-state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-contributors',
  standalone: true,
  imports: [MatCard],
  templateUrl: './top-contributors.component.html',
  styleUrl: './top-contributors.component.scss'
})
export class TopContributorsComponent {
  @Input({ required: true }) r_theme: string = '';
  @Input({ required: true }) r_key: string = '';
  @Input({ required: true }) r_messageList: MessageList[] = [];

  #bulletinBoardStateService = inject(BulletinBoardStateService);
  #router = inject(Router);

  goToBulletinBoard() {
    this.#bulletinBoardStateService.setModelState(true);
    this.#router.navigate(['/bulletin-board', this.r_key]);
  }
}
