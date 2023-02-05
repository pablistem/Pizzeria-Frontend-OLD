import { Detail } from "./detail";

export interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  details: Detail[];
  discount: number;
}
