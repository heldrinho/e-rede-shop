// 1-frontend/src/types/Cart.ts

import type { Product, ProductColor } from './Product'

export interface CartItem {
  product: Product
  quantity: number
  selectedColor: ProductColor
  selectedSize: string
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  shipping: number
  total: number
}
