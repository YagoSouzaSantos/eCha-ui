import { Contribution } from "./contribution";

export interface BulletinBoard {
  id?: string;
  hostImage: string | null;
  hostMessage: string;
  messages: Contribution[];
  totalValue: number;
  collectedValue: number;
  contributorCount: number;
  themeColor: string;
  eventDate: Date | null;
  giftListKey: string;
}
