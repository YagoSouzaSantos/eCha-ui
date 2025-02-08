import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-withdraw-dialog',
  standalone: true,
  imports: [],
  templateUrl: './withdraw-dialog.component.html',
  styleUrl: './withdraw-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithdrawDialogComponent { }
