// 1-frontend/src/types/Product.ts

import type { Category } from './Category'

export interface ProductColor {
  name: string
  hex: string
}

export interface Product {
  id: number
  name: string
  brand: string
  description?: string
  price: number
  originalPrice?: number
  discount?: number
  rating: number
  reviewCount: number
  images: string[]
  colors: ProductColor[]
  sizes: string[]
  category: Category
  stock: number
  isNew: boolean
}
