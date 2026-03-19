<!-- 1-frontend/src/components/product/ProductFilter.vue -->
<script setup lang="ts">
defineProps<{
  search: string
  selectedCategory: string
  maxPrice: number
}>()

defineEmits<{
  'update:search': [value: string]
  'update:selectedCategory': [value: string]
  'update:maxPrice': [value: number]
}>()

const categories = [
  { value: '', label: 'Todas' },
  { value: 'roupas', label: 'Roupas' },
  { value: 'calcados', label: 'Calçados' },
  { value: 'acessorios', label: 'Acessórios' },
  { value: 'bolsas', label: 'Bolsas' },
]
</script>

<template>
  <aside class="filter">
    <h3 class="filter__title">Filtros</h3>

    <!-- Busca -->
    <div class="filter__group">
      <label class="filter__label">Buscar</label>
      <div class="filter__search">
        <span class="filter__search-icon">🔍</span>
        <input
          type="text"
          placeholder="Nome do produto..."
          :value="search"
          @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
          class="filter__input"
        />
      </div>
    </div>

    <!-- Categoria -->
    <div class="filter__group">
      <label class="filter__label">Categoria</label>
      <div class="filter__categories">
        <button
          v-for="cat in categories"
          :key="cat.value"
          class="filter__cat-btn"
          :class="{ 'filter__cat-btn--active': selectedCategory === cat.value }"
          @click="$emit('update:selectedCategory', cat.value)"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Preço -->
    <div class="filter__group">
      <label class="filter__label">
        Preço máximo: <strong>R$ {{ maxPrice }}</strong>
      </label>
      <input
        type="range"
        min="0"
        max="500"
        step="10"
        :value="maxPrice"
        @input="$emit('update:maxPrice', Number(($event.target as HTMLInputElement).value))"
        class="filter__range"
      />
      <div class="filter__range-labels">
        <span>R$ 0</span>
        <span>R$ 500</span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.filter {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  height: fit-content;
  position: sticky;
  top: 84px;
}

.filter__title {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid #ecf0f1;
}

.filter__group {
  margin-bottom: 24px;
}

.filter__label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.filter__search {
  position: relative;
}

.filter__search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
}

.filter__input {
  width: 100%;
  padding: 10px 10px 10px 32px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.filter__input:focus {
  border-color: #2c3e50;
}

.filter__categories {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.filter__cat-btn {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  color: #555;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.filter__cat-btn:hover {
  border-color: #2c3e50;
  color: #2c3e50;
}

.filter__cat-btn--active {
  background: #2c3e50;
  color: white;
  border-color: #2c3e50;
}

.filter__range {
  width: 100%;
  accent-color: #2c3e50;
  cursor: pointer;
}

.filter__range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #888;
  margin-top: 6px;
}
</style>
