import { Item } from "./item";

export interface GiftList {
  id: string;
  userId: number;
  fontId: number;
  title: string;
  highlightColor: string;
  statusListId: number;
  description: string | null;
  photoUrl: string | null; // lembrar de remover
  image: string | null;
  eventDate: Date | null;
  totalValue: number;
  valueCollected: number;
  contributorCount: number;
  creator: string;
  items: Item[];
}
