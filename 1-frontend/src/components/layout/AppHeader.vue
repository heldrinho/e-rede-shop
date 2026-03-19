<!-- 1-frontend/src/components/layout/AppHeader.vue -->
<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <!-- Logo como botão -->
      <button class="header__logo" @click="goHome">🛒 E-Rede Shop</button>

      <!-- Navegação -->
      <nav class="header__nav">
        <RouterLink to="/">Início</RouterLink>
        <a href="#">Roupas</a>
        <a href="#">Calçados</a>
        <a href="#">Acessórios</a>
      </nav>

      <!-- Carrinho -->
      <button class="cart-btn" @click="cart.isOpen = true">
        🛍️
        <span v-if="cart.totalItems > 0" class="cart-badge">
          {{ cart.totalItems }}
        </span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #2c3e50, #3d5168);
  color: white;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.header__logo {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 1px;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s;
}

.header__logo:hover {
  opacity: 0.85;
}

.header__nav {
  display: flex;
  gap: 8px;
  align-items: center;
}

.header__nav a {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.2s;
}

.header__nav a:hover,
.header__nav .router-link-active {
  color: white;
  background: rgba(255, 255, 255, 0.2);
}

.cart-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  position: relative;
  padding: 8px 14px;
  border-radius: 8px;
  transition: background 0.2s;
}

.cart-btn:hover {
  background: rgba(255, 255, 255, 0.25);
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
