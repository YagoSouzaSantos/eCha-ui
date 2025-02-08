import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-manage-profile',
  standalone: true,
  imports: [],
  templateUrl: './manage-profile.component.html',
  styleUrl: './manage-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageProfileComponent { }
