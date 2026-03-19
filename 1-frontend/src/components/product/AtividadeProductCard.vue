<!-- 1-frontend/src/components/product/AtividadeProductCard.vue -->
<script lang="ts">
import { defineComponent } from 'vue'
import type { Product } from '@/types/Product'

export default defineComponent({
  name: 'AtividadeProductCard',

  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },

  emits: ['add-to-cart'],

  methods: {
    handleAdd() {
      this.$emit('add-to-cart', this.product)
    },
  },
})
</script>

<template>
  <div class="card">
    <div class="card__info">
      <h3 class="card__name">{{ product.name }}</h3>
      <p class="card__category">{{ product.category.title }}</p>
      <p class="card__price">
        {{
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
            product.price,
          )
        }}
      </p>
    </div>
    <button class="card__btn" @click="handleAdd">+ Adicionar</button>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.card__name {
  font-size: 1rem;
  color: #2c3e50;
  margin-bottom: 4px;
}

.card__category {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 8px;
}

.card__price {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e74c3c;
}

.card__btn {
  padding: 10px 20px;
  background: #2c3e50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  white-space: nowrap;
  transition: background 0.2s;
}

.card__btn:hover {
  background: #e74c3c;
}
</style>
