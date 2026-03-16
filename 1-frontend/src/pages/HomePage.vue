<!-- 1-frontend/src/pages/HomePage.vue -->
<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ProductCard from '@/components/product/ProductCard.vue'

const products = [
  {
    id: 1,
    name: 'Camiseta Premium',
    price: 89.9,
    image: 'https://picsum.photos/seed/shirt1/400/300',
    isNew: true,
  },
  {
    id: 2,
    name: 'Tênis Runner',
    price: 299.9,
    image: 'https://picsum.photos/seed/shoe1/400/300',
    discount: 15,
  },
  {
    id: 3,
    name: 'Calça Jeans Slim',
    price: 189.9,
    image: 'https://picsum.photos/seed/pants1/400/300',
  },
  {
    id: 4,
    name: 'Boné Clássico',
    price: 59.9,
    image: 'https://picsum.photos/seed/cap1/400/300',
    isNew: true,
  },
  {
    id: 5,
    name: 'Jaqueta Bomber',
    price: 349.9,
    image: 'https://picsum.photos/seed/jacket1/400/300',
    discount: 20,
  },
  {
    id: 6,
    name: 'Mochila Urban',
    price: 199.9,
    image: 'https://picsum.photos/seed/bag1/400/300',
  },
]
</script>

<template>
  <div class="home">
    <AppHeader />
    <main class="main">
      <h2>Produtos em destaque</h2>
      <div class="grid">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :name="product.name"
          :price="product.price"
          :image="product.image"
          :isNew="product.isNew"
          :discount="product.discount"
        />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.main {
  max-width: 1200px;
  margin: 32px auto;
  padding: 0 24px;
}

h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
</style>
