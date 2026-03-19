<!-- 1-frontend/src/components/product/ProductCard.vue -->
<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()

const props = defineProps<{
  id: number
  name: string
  price: number
  image: string
  isNew?: boolean
  discount?: number
}>()

function addToCart() {
  cart.addItem({
    id: props.id,
    name: props.name,
    price: props.price,
    image: props.image,
  })
}
</script>

<template>
  <div class="card">
    <div class="card__badges">
      <span v-if="isNew" class="badge badge--new">NOVO</span>
      <span v-if="discount" class="badge badge--discount">-{{ discount }}%</span>
    </div>
    <img :src="image" :alt="name" class="card__image" />
    <div class="card__info">
      <h3 class="card__name">{{ name }}</h3>
      <p class="card__price">
        {{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price) }}
      </p>
      <button class="card__btn" @click="addToCart">Adicionar ao Carrinho</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  position: relative;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card__badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
}

.badge--new {
  background: #2ecc71;
  color: white;
}
.badge--discount {
  background: #e74c3c;
  color: white;
}

.card__image {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card__info {
  padding: 16px;
}

.card__name {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 8px;
}

.card__price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #e74c3c;
  margin-bottom: 12px;
}

.card__btn {
  width: 100%;
  padding: 10px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s;
}

.card__btn:hover {
  background: #e74c3c;
}
</style>
