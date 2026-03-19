<!-- 1-frontend/src/components/layout/AppHeader.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()
const searchQuery = ref('')

function goHome() {
  router.push('/')
}

function handleSearch() {
  router.push({ path: '/', query: { busca: searchQuery.value } })
}

function filterCategory(category: string) {
  router.push({ path: '/', query: { categoria: category } })
}
</script>

<template>
  <header class="header">
    <!-- Linha 1: Logo + Busca + Carrinho -->
    <div class="header__top">
      <div class="header__container">
        <!-- Logo -->
        <button class="header__logo" @click="goHome">🛒 E-Rede Shop</button>

        <!-- Barra de busca -->
        <div class="header__search">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Pesquisar produtos..."
            class="header__search-input"
            @keyup.enter="handleSearch"
          />
          <button class="header__search-btn" @click="handleSearch">🔍</button>
        </div>

        <!-- Carrinho -->
        <button class="cart-btn" @click="cart.isOpen = true">
          🛍️ Carrinho
          <span v-if="cart.totalItems > 0" class="cart-badge">
            {{ cart.totalItems }}
          </span>
        </button>
      </div>
    </div>

    <!-- Linha 2: Categorias -->
    <div class="header__nav-bar">
      <div class="header__container">
        <nav class="header__nav">
          <button @click="goHome">Todos</button>
          <button @click="filterCategory('roupas')">Roupas</button>
          <button @click="filterCategory('calcados')">Calçados</button>
          <button @click="filterCategory('acessorios')">Acessórios</button>
          <button @click="filterCategory('bolsas')">Bolsas</button>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #2c3e50, #3d5168);
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

.header__top {
  padding: 12px 24px;
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 16px;
}

.header__logo {
  font-size: 1.3rem;
  font-weight: 800;
  color: white;
  background: none;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  padding: 0;
  transition: opacity 0.2s;
}

.header__logo:hover {
  opacity: 0.85;
}

.header__search {
  flex: 1;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.header__search-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  font-size: 0.95rem;
  outline: none;
  color: #333;
}

.header__search-btn {
  padding: 12px 20px;
  background: #e74c3c;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background 0.2s;
}

.header__search-btn:hover {
  background: #c0392b;
}

.cart-btn {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  padding: 10px 16px;
  border-radius: 8px;
  white-space: nowrap;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
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
  width: 20px;
  height: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Linha de categorias */
.header__nav-bar {
  background: rgba(0, 0, 0, 0.2);
  padding: 0 24px;
}

.header__nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 4px;
}

.header__nav button {
  color: rgba(255, 255, 255, 0.85);
  background: none;
  border: none;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 10px 14px;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 2px solid transparent;
}

.header__nav button:hover {
  color: white;
  border-bottom: 2px solid white;
}
</style>
