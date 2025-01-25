import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MessageList } from '../../../../core/interfaces/MessageList ';

@Component({
  selector: 'app-top-contributors',
  standalone: true,
  imports: [MatCard],
  templateUrl: './top-contributors.component.html',
  styleUrl: './top-contributors.component.scss'
})
export class TopContributorsComponent {
  @Input({ required: true }) r_theme: string = '';
  @Input({ required: true }) r_messageList: MessageList[] = [];
}
