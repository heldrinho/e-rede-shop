<!-- 1-frontend/src/components/cart/CartDrawer.vue -->
<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
</script>

<template>
  <!-- Overlay -->
  <div v-if="cart.isOpen" class="overlay" @click="cart.isOpen = false" />

  <!-- Drawer -->
  <div class="drawer" :class="{ 'drawer--open': cart.isOpen }">
    <div class="drawer__header">
      <h2>🛍️ Meu Carrinho ({{ cart.totalItems }})</h2>
      <button class="drawer__close" @click="cart.isOpen = false">✕</button>
    </div>

    <div class="drawer__body">
      <div v-if="cart.items.length === 0" class="drawer__empty">Seu carrinho está vazio.</div>

      <div v-else class="drawer__items">
        <div v-for="item in cart.items" :key="item.product.id" class="drawer__item">
          <img :src="item.product.image" :alt="item.product.name" />
          <div class="drawer__item-info">
            <p class="drawer__item-name">{{ item.product.name }}</p>
            <p class="drawer__item-price">{{ formatCurrency(item.product.price) }}</p>
          </div>
          <div class="drawer__item-qty">
            <button @click="cart.updateQuantity(item.product.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="cart.updateQuantity(item.product.id, item.quantity + 1)">+</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="cart.items.length > 0" class="drawer__footer">
      <div class="drawer__total">
        <span>Total</span>
        <strong>{{ formatCurrency(cart.subtotal) }}</strong>
      </div>
      <button class="drawer__checkout">Finalizar Pedido →</button>
      <button class="drawer__clear" @click="cart.clearCart()">Limpar carrinho</button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 200;
}

.drawer {
  position: fixed;
  top: 0;
  right: -420px;
  width: 420px;
  height: 100vh;
  background: white;
  z-index: 201;
  display: flex;
  flex-direction: column;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
  transition: right 0.3s ease;
}

.drawer--open {
  right: 0;
}

.drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #ecf0f1;
}

.drawer__header h2 {
  font-size: 1.1rem;
  color: #2c3e50;
}

.drawer__close {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #888;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s;
}

.drawer__close:hover {
  background: #f0f0f0;
}

.drawer__body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
}

.drawer__empty {
  color: #888;
  font-style: italic;
  text-align: center;
  margin-top: 48px;
}

.drawer__items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.drawer__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background: #f8f9fa;
}

.drawer__item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 6px;
}

.drawer__item-info {
  flex: 1;
}

.drawer__item-name {
  font-size: 0.9rem;
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 4px;
}

.drawer__item-price {
  font-size: 0.9rem;
  color: #e74c3c;
  font-weight: 600;
}

.drawer__item-qty {
  display: flex;
  align-items: center;
  gap: 8px;
}

.drawer__item-qty button {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.drawer__item-qty button:hover {
  background: #f0f0f0;
}

.drawer__item-qty span {
  font-weight: 600;
  min-width: 20px;
  text-align: center;
}

.drawer__footer {
  padding: 20px 24px;
  border-top: 1px solid #ecf0f1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.drawer__total {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  color: #2c3e50;
}

.drawer__total strong {
  font-size: 1.2rem;
}

.drawer__checkout {
  padding: 14px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.2s;
}

.drawer__checkout:hover {
  background: #e74c3c;
}

.drawer__clear {
  padding: 10px;
  background: none;
  color: #888;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
}

.drawer__clear:hover {
  background: #fee;
  color: #e74c3c;
  border-color: #e74c3c;
}
</style>
