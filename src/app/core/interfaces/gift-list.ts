import { Item } from "./item";

export interface GiftList {
  id: number;
  userId: number;
  key: string;
  title: string;
  highlightColor: string;
  typography: number;
  description: string | null;
  photoUrl: string | null;
  image: string | null;
  eventDate: Date | null;
  totalValue: number;
  valueCollected: number;
  contributorCount: number;
  creator: string;
  items: Item[];
}
