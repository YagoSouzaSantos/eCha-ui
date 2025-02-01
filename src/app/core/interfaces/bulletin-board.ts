import { Message } from './message';

export interface BulletinBoard {
  hostImage: string;
  hostMessage: string;
  messages: Message[];
  totalValue: number;
  collectedValue: number;
  contributorCount: number;
  themeColor: string;
  eventDate: Date;
  giftListKey: string;
}
