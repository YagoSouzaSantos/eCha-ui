import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { SmoothBackGroundDirective } from '../../../../core/diretives/smoothBackGround.directive';
import { ThemeColorDirective } from '../../../../core/diretives/themeColor.directive';
import { BulletinBoard } from '../../../../core/interfaces/bulletin-board';
import { GiftList } from '../../../../core/interfaces/gift-list';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { bulletinBoardExample } from '../../../../shared/tests/bulletin-board';
import { ContributionHistoryDialogComponent } from '../../../bulletin-board/contribution-history-dialog/contribution-history-dialog.component';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { WithdrawDialogComponent } from '../../../../shared/components/withdraw-dialog/withdraw-dialog.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatTooltipModule, MatCardModule, MatButtonModule, RouterLink, CommonModule, ThemeColorDirective, SmoothBackGroundDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) r_giftList!: GiftList;
  readonly dialog = inject(MatDialog);
  #authenticationService = inject(AuthenticationService);
  #snackbarService = inject(SnackbarService);

  bulletinBoard: BulletinBoard = bulletinBoardExample;

  onRankingClick() {
    this.dialog.open(ContributionHistoryDialogComponent, {
      data: {
        messages: this.bulletinBoard.messages
      }
    });
  }

  onMakeWithdrawal() {
    if (this.#authenticationService.getUser().pixKey === '') {
      this.#snackbarService.showAlert('Chave PIX ainda não cadastrada!')
    } else {
      this.dialog.open(WithdrawDialogComponent, {
        data: {
          giftList: this.r_giftList,
        }
      });
    }
  }
}
