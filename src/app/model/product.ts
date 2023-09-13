export interface Product {
  id: number
  name: string
  description: string
  image?: string
  category: string
  price: number
  stock: number
}

export interface ProductRequest extends Omit<Product, 'id'> { }
