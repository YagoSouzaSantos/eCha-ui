import { Item } from "./item";

export interface GiftList {
  id?: number;
  key: string;
  title: string;
  themeColor: string;
  typography: number;
  message: string | null;
  photoUrl: string | null;
  photo: string | null;
  eventDate: Date | null;
  totalValue: number;
  valueCollected: number;
  contributorCount: number;
  creator: string;
  items: Item[];
}
