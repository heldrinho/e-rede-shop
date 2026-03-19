<!-- 1-frontend/src/App.vue -->
<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import CartDrawer from '@/components/cart/CartDrawer.vue'

const cart = useCartStore()
</script>

<template>
  <div id="app">
    <RouterView />
    <CartDrawer />

    <!-- Toast de confirmação -->
    <Transition name="toast">
      <div v-if="cart.lastAdded" class="toast">
        <span class="toast__icon">✅</span>
        <div class="toast__text">
          <strong>Adicionado ao carrinho!</strong>
          <p>{{ cart.lastAdded }}</p>
        </div>
        <button class="toast__cart" @click="cart.isOpen = true">Ver carrinho →</button>
      </div>
    </Transition>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  min-height: 100vh;
}

/* Toast */
.toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  z-index: 999;
  min-width: 300px;
  max-width: 90vw;
  border-left: 4px solid #2ecc71;
}

.toast__icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.toast__text {
  flex: 1;
}

.toast__text strong {
  font-size: 0.9rem;
  color: #2c3e50;
  display: block;
}

.toast__text p {
  font-size: 0.82rem;
  color: #888;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;
}

.toast__cart {
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 0.8rem;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s;
  flex-shrink: 0;
}

.toast__cart:hover {
  background: #e74c3c;
}

/* Animação */
.toast-enter-active {
  animation: slideUp 0.3s ease;
}

.toast-leave-active {
  animation: slideDown 0.3s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}
</style>
