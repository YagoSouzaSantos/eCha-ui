import { GiftList } from './../../core/interfaces/gift-list';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BulletinBoard } from '../../core/interfaces/bulletin-board';
import { MinimalistFooterComponent } from "../../core/layout/minimalist-footer/minimalist-footer.component";
import { TopNavComponent } from '../../core/layout/top-nav/top-nav.component';
import { BulletinBoardEvolutionBarComponent } from "./bulletin-board-evolution-bar/bulletin-board-evolution-bar.component";
import { HostMessageComponent } from "./host-message/host-message.component";
import { MessagesComponent } from './messages/messages.component';


const BULLETIN: BulletinBoard = {
  hostImage: 'https://img.freepik.com/vetores-premium/rottweiler-com-bone-de-beisebol_105738-1717.jpg?w=740',
  hostMessage: 'Welcome to the bulletin board! Feel free to leave your messages.',
  messages: [
    {
      contributor: 'Alice Johnson',
      message: 'Thank you for organizing this event!',
      icon: 'ph ph-alien',
      value: 50,
      visible: true,
    },
    {
      contributor: 'Bob Smith',
      message: 'Looking forward to the next meeting.',
      icon: 'ph ph-cookie',
      value: 20,
      visible: false,
    },
    {
      contributor: 'Charlie Brown',
      message: 'Great initiative! Count on me for support.',
      icon: 'ph ph-crown',
      value: 100,
      visible: true,
    },
    {
      contributor: 'Diana Prince',
      message: 'Amazing work, team!',
      icon: 'ph ph-confetti',
      value: 75,
      visible: true,
    },
    {
      contributor: 'Edward Green',
      message: 'Happy to be part of this!',
      icon: 'ph ph-lightning',
      value: 30,
      visible: false,
    },
    {
      contributor: 'Fiona Black',
      message: 'Let me know how else I can help.',
      icon: 'ph ph-rainbow-cloud',
      value: 60,
      visible: true,
    },
    {
      contributor: 'George White',
      message: 'Keep it up, everyone!',
      icon: 'ph ph-popsicle',
      value: 40,
      visible: true,
    },
    {
      contributor: 'Hannah Blue',
      message: 'This is so inspiring!',
      icon: 'ph ph-rainbow',
      value: 90,
      visible: true,
    },
  ],
  giftListKey: 'abcdef1234',
  totalValue: 1465,
  collectedValue: 465,
  contributorCount: 8,
  themeColor: 'orange',
  eventDate: new Date('2025-03-01T10:00:00')
};

@Component({
  selector: 'app-bulletin-board',
  standalone: true,
  imports: [MinimalistFooterComponent, BulletinBoardEvolutionBarComponent, HostMessageComponent, MessagesComponent, TopNavComponent],
  templateUrl: './bulletin-board.component.html',
  styleUrl: './bulletin-board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BulletinBoardComponent {
  bulletinBoard: BulletinBoard = BULLETIN;
  editable:boolean = true
}
