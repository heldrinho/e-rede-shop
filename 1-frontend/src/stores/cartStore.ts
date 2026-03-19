// 1-frontend/src/stores/cartStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CartProduct {
  id: number
  name: string
  price: number
  image: string
}

export interface CartItem {
  product: CartProduct
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const isOpen = ref(false)
  const lastAdded = ref<string | null>(null)

  const totalItems = computed(() => items.value.reduce((sum, item) => sum + item.quantity, 0))

  const subtotal = computed(() =>
    items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  )

  function addItem(product: CartProduct) {
    const existing = items.value.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ product, quantity: 1 })
    }

    // Mostra notificação
    lastAdded.value = product.name
    setTimeout(() => {
      lastAdded.value = null
    }, 2500)
  }

  function removeItem(productId: number) {
    items.value = items.value.filter((i) => i.product.id !== productId)
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }
    const item = items.value.find((i) => i.product.id === productId)
    if (item) item.quantity = quantity
  }

  function clearCart() {
    items.value = []
  }

  return {
    items,
    isOpen,
    totalItems,
    subtotal,
    lastAdded,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }
})
