import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { SmoothBackGroundDirective } from '../../../../core/diretives/smoothBackGround.directive';
import { ThemeColorDirective } from '../../../../core/diretives/themeColor.directive';
import { GiftList } from '../../../../core/interfaces/gift-list';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { GiftListService } from '../../../../core/services/gift-list.service';
import { WithdrawDialogComponent } from '../../../../shared/components/withdraw-dialog/withdraw-dialog.component';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { ContributionHistoryDialogComponent } from '../../../bulletin-board/contribution-history-dialog/contribution-history-dialog.component';
import { BulletinBoardStateService } from '../../../bulletin-board/services/bulletin-board-state.service';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatTooltipModule, MatCardModule, MatButtonModule, RouterLink, CommonModule, ThemeColorDirective, SmoothBackGroundDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit {
  @Input({ required: true }) r_giftList!: GiftList;
  readonly dialog = inject(MatDialog);
  #authenticationService = inject(AuthenticationService);
  #giftListService = inject(GiftListService);
  #snackbarService = inject(SnackbarService);
  #bulletinBoardStateService = inject(BulletinBoardStateService);
  #router = inject(Router);


  ngOnInit(): void {
    this.#giftListService.getGiftListById(this.r_giftList.id).subscribe((response) => this.r_giftList = response);
  }

  onRankingClick() {
    this.dialog.open(ContributionHistoryDialogComponent, {
      data: {
        messages: this.r_giftList.contributions,
        themeColor: this.r_giftList.highlightColor
      }
    });
  }

  onMakeWithdrawal() {
    if (this.#authenticationService.getUser().pixKey === '' || this.#authenticationService.getUser().pixKey === null) {
      this.#snackbarService.showAlert('Chave PIX ainda não cadastrada!');
    } else {
        this.dialog.open(WithdrawDialogComponent, {
          data: {
            giftList: this.r_giftList,
          }
        });
    }
  }


  goToBulletinBoard() {
    this.#bulletinBoardStateService.setModelState(true);
    this.#router.navigate(['/bulletin-board', this.r_giftList.id]);
  }
}
