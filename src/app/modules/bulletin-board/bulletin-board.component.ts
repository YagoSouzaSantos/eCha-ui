import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BulletinBoard } from '../../core/interfaces/bulletin-board';
import { BULLETIN_BOARD } from './imports';
import { BulletinBoardStateService } from './services/bulletin-board-state.service';
import { bulletinBoardExample } from '../../shared/tests/bulletin-board';

@Component({
  selector: 'app-bulletin-board',
  standalone: true,
  imports: [BULLETIN_BOARD],
  templateUrl: './bulletin-board.component.html',
  styleUrl: './bulletin-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulletinBoardComponent {
  bulletinBoard: BulletinBoard = bulletinBoardExample;
  editable: boolean = false;

  #bulletinBoardStateService = inject(BulletinBoardStateService);

  ngOnInit() {
    this.#bulletinBoardStateService.modelState$.subscribe((value) => {
      this.editable = value;
    });
    window.scrollTo(0, 0);
  }
}
