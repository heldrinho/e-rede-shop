<!-- 1-frontend/src/pages/AtividadePage.vue -->
<script lang="ts">
import { defineComponent } from 'vue'
import AtividadeProductCard from '@/components/product/AtividadeProductCard.vue'
import type { Product } from '@/types/Product'
import type { CartItem } from '@/types/Cart'

export default defineComponent({
  name: 'AtividadePage',

  components: { AtividadeProductCard },

  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Camiseta Premium',
          brand: 'E-Rede',
          description: '',
          price: 89.9,
          rating: 4.5,
          reviewCount: 10,
          images: [],
          colors: [],
          sizes: ['P', 'M', 'G'],
          stock: 10,
          isNew: true,
          category: { id: 1, name: 'Roupas', title: 'Roupas', slug: 'roupas' as const },
        },
        {
          id: 2,
          name: 'Tênis Runner',
          brand: 'E-Rede',
          description: '',
          price: 299.9,
          rating: 4.8,
          reviewCount: 25,
          images: [],
          colors: [],
          sizes: ['38', '39', '40'],
          stock: 5,
          isNew: false,
          category: { id: 2, name: 'Calçados', title: 'Calçados', slug: 'calcados' as const },
        },
        {
          id: 3,
          name: 'Calça Jeans Slim',
          brand: 'E-Rede',
          description: '',
          price: 189.9,
          rating: 4.2,
          reviewCount: 8,
          images: [],
          colors: [],
          sizes: ['38', '40', '42'],
          stock: 8,
          isNew: false,
          category: { id: 1, name: 'Roupas', title: 'Roupas', slug: 'roupas' as const },
        },
        {
          id: 4,
          name: 'Boné Clássico',
          brand: 'E-Rede',
          description: '',
          price: 59.9,
          rating: 4.0,
          reviewCount: 5,
          images: [],
          colors: [],
          sizes: ['Único'],
          stock: 15,
          isNew: true,
          category: { id: 3, name: 'Acessórios', title: 'Acessórios', slug: 'acessorios' as const },
        },
      ] as Product[],

      cartItems: [] as CartItem[],
    }
  },

  computed: {
    totalItems(): number {
      return this.cartItems.reduce((sum, item) => sum + item.quantity, 0)
    },

    finalPrice(): number {
      return this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    },
  },

  methods: {
    addToCart(product: Product) {
      const existing = this.cartItems.find((item) => item.product.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.cartItems.push({
          product,
          quantity: 1,
          selectedColor: { name: '', hex: '' },
          selectedSize: '',
        })
      }
    },

    removeOne(productId: number) {
      const index = this.cartItems.findIndex((item) => item.product.id === productId)
      if (index === -1) return
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--
      } else {
        this.cartItems.splice(index, 1)
      }
    },

    removeAll(productId: number) {
      this.cartItems = this.cartItems.filter((item) => item.product.id !== productId)
    },

    formatCurrency(value: number): string {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value)
    },
  },
})
</script>

<template>
  <div class="page">
    <h1 class="page__title">🛒 E-Rede Shop — Atividade 2</h1>

    <!-- Lista de Produtos -->
    <section class="section">
      <h2>Produtos</h2>
      <div class="products">
        <AtividadeProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </section>

    <!-- Resumo do Carrinho -->
    <section class="section cart">
      <h2>🛍️ Carrinho</h2>

      <div v-if="cartItems.length === 0" class="cart__empty">Nenhum item no carrinho ainda.</div>

      <div v-else>
        <table class="cart__table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Qtd</th>
              <th>Subtotal</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.product.id">
              <td>{{ item.product.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ formatCurrency(item.product.price * item.quantity) }}</td>
              <td class="cart__actions">
                <button @click="removeOne(item.product.id)">-</button>
                <button @click="removeAll(item.product.id)">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="cart__totals">
          <p>
            Total de itens: <strong>{{ totalItems }}</strong>
          </p>
          <p>
            Preço final: <strong>{{ formatCurrency(finalPrice) }}</strong>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 24px;
}

.page__title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 32px;
}

.section {
  margin-bottom: 48px;
}

.section h2 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ecf0f1;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.cart__empty {
  color: #888;
  font-style: italic;
}

.cart__table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
}

.cart__table th,
.cart__table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ecf0f1;
}

.cart__table th {
  background: #f8f9fa;
  font-weight: 600;
  color: #2c3e50;
}

.cart__actions {
  display: flex;
  gap: 8px;
}

.cart__actions button {
  padding: 4px 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  transition: background 0.2s;
}

.cart__actions button:hover {
  background: #fee;
}

.cart__totals {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  gap: 32px;
}

.cart__totals p {
  font-size: 1rem;
  color: #555;
}

.cart__totals strong {
  color: #2c3e50;
}
</style>
