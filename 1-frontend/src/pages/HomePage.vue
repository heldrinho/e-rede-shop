<!-- 1-frontend/src/pages/HomePage.vue -->
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroBanner from '@/components/layout/HeroBanner.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import ProductFilter from '@/components/product/ProductFilter.vue'

const route = useRoute()

const search = ref('')
const selectedCategory = ref('')
const maxPrice = ref(500)

watch(
  () => route.query,
  (query) => {
    selectedCategory.value = (query.categoria as string) || ''
    search.value = (query.busca as string) || ''
  },
  { immediate: true },
)

const allProducts = [
  {
    id: 1,
    name: 'Camiseta Premium',
    price: 89.9,
    image: 'https://picsum.photos/seed/shirt1/400/300',
    isNew: true,
    category: 'roupas',
  },
  {
    id: 2,
    name: 'Tênis Runner',
    price: 299.9,
    image: 'https://picsum.photos/seed/shoe1/400/300',
    discount: 15,
    category: 'calcados',
  },
  {
    id: 3,
    name: 'Calça Jeans Slim',
    price: 189.9,
    image: 'https://picsum.photos/seed/pants1/400/300',
    category: 'roupas',
  },
  {
    id: 4,
    name: 'Boné Clássico',
    price: 59.9,
    image: 'https://picsum.photos/seed/cap1/400/300',
    isNew: true,
    category: 'acessorios',
  },
  {
    id: 5,
    name: 'Jaqueta Bomber',
    price: 349.9,
    image: 'https://picsum.photos/seed/jacket1/400/300',
    discount: 20,
    category: 'roupas',
  },
  {
    id: 6,
    name: 'Mochila Urban',
    price: 199.9,
    image: 'https://picsum.photos/seed/bag1/400/300',
    category: 'bolsas',
  },
]

const filteredProducts = computed(() =>
  allProducts.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase())
    const matchCategory = selectedCategory.value === '' || p.category === selectedCategory.value
    const matchPrice = p.price <= maxPrice.value
    return matchSearch && matchCategory && matchPrice
  }),
)
</script>

<template>
  <div class="home">
    <AppHeader />
    <HeroBanner />
    <main class="main">
      <h2>Produtos em destaque</h2>
      <div class="layout">
        <ProductFilter
          v-model:search="search"
          v-model:selectedCategory="selectedCategory"
          v-model:maxPrice="maxPrice"
        />
        <div class="grid">
          <div v-if="filteredProducts.length === 0" class="empty">Nenhum produto encontrado.</div>
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :id="product.id"
            :name="product.name"
            :price="product.price"
            :image="product.image"
            :isNew="product.isNew"
            :discount="product.discount"
          />
        </div>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.main {
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 16px;
}

h2 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 16px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.empty {
  grid-column: 1 / -1;
  text-align: center;
  color: #888;
  font-style: italic;
  padding: 48px;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 240px 1fr;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
