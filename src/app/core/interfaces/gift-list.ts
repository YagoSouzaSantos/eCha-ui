export interface GiftList {
  id?: number;
  key: string;
  title: string;
  themeColor: string;
  typography: number;
  message: string;
  photoUrl: string | null;
  photo: string | null;
  eventDate: Date | null;
  totalValue: number;
  valueCollected: number;
  creator: string;
}
