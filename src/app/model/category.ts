import { Product } from "./product";

export interface Category {
  id: number;
  name: string;
  image: string;
  products: Product[];
}
