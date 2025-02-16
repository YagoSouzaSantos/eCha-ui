import { Component, inject, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { BulletinBoardStateService } from '../../../../modules/bulletin-board/services/bulletin-board-state.service';
import { Router } from '@angular/router';
import { TextColorDirective } from '../../../../core/diretives/textColor.directive';
import { MatButtonModule } from '@angular/material/button';
import { Contribution } from '../../../../core/interfaces/contribution';

@Component({
  selector: 'app-top-contributors',
  standalone: true,
  imports: [MatCard, TextColorDirective, MatButtonModule],
  templateUrl: './top-contributors.component.html',
  styleUrl: './top-contributors.component.scss'
})
export class TopContributorsComponent {
  @Input({ required: true }) r_editable!: boolean;
  @Input({ required: true }) r_theme: string = '';
  @Input({ required: true }) r_key: string = '';
  _r_messageList: Contribution[] = [];

  @Input({ required: true })
  set r_messageList(value: Contribution[]) {
    this._r_messageList = [...value].sort((a, b) => b.value - a.value);
  }

  #bulletinBoardStateService = inject(BulletinBoardStateService);
  #router = inject(Router);

  goToBulletinBoard() {
    this.#bulletinBoardStateService.setModelState(this.r_editable);
    this.#router.navigate(['/bulletin-board', this.r_key]);
  }
}
