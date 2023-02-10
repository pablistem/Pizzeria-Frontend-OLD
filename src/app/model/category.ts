import { Product } from "./product";

export interface Category {
  name: string;
  image: string;
  products: Product[];
}
