import { Category } from "./category"

export interface Product {
  id: number
  name: string
  description: string
  image: string
  category: Category
  price: number
  stock: number
}



