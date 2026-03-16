<!-- 1-frontend/src/components/layout/AppHeader.vue -->
<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__container">
      <!-- Logo -->
      <div class="header__logo">🛒 E-Rede Shop</div>

      <!-- Navegação -->
      <nav class="header__nav">
        <a href="/">Início</a>
        <a href="#">Roupas</a>
        <a href="#">Calçados</a>
        <a href="#">Acessórios</a>
      </nav>

      <!-- Ícone do carrinho -->
      <div class="header__cart">
        <button class="cart-btn">🛍️ <span class="cart-badge">0</span></button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.header__container {
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.header__nav {
  display: flex;
  gap: 24px;
}

.header__nav a {
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  opacity: 0.85;
  transition: opacity 0.2s;
}

.header__nav a:hover {
  opacity: 1;
}

.cart-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
