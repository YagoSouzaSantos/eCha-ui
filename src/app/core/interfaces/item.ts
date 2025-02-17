import { Contribution } from "./contribution";

export interface Item {
  id: number;
  name: string;
  listId: string;
  categoryId: number;
  image: string | null;
  totalValue: number;
  valueCollected: number;
  contributions: Contribution[];
}
