import { Item } from "./item";

export interface Category {
  id: number;
  name: string;
  creationDate: Date;
  updateDate: Date;
  items: Item[];
}
