<!-- 1-frontend/src/components/layout/HeroBanner.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)

const slides = [
  {
    id: 1,
    title: 'Nova Coleção Verão 2026',
    subtitle: 'Até 40% OFF em roupas selecionadas',
    cta: 'Ver Ofertas',
    bg: 'linear-gradient(135deg, #e74c3c, #c0392b)',
    emoji: '👗',
  },
  {
    id: 2,
    title: 'Tênis e Calçados',
    subtitle: 'Frete grátis em compras acima de R$ 199',
    cta: 'Comprar Agora',
    bg: 'linear-gradient(135deg, #2c3e50, #3d5168)',
    emoji: '👟',
  },
  {
    id: 3,
    title: 'Acessórios em Destaque',
    subtitle: 'Bolsas, bonés e muito mais com desconto',
    cta: 'Explorar',
    bg: 'linear-gradient(135deg, #8e44ad, #6c3483)',
    emoji: '👜',
  },
]

let timer: ReturnType<typeof setInterval>

function next() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

function prev() {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
}

function goTo(index: number) {
  currentSlide.value = index
}

onMounted(() => {
  timer = setInterval(next, 4000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="banner">
    <!-- Slides -->
    <div class="banner__slide" :style="{ background: slides[currentSlide].bg }">
      <div class="banner__content">
        <div class="banner__emoji">{{ slides[currentSlide].emoji }}</div>
        <div class="banner__text">
          <h2 class="banner__title">{{ slides[currentSlide].title }}</h2>
          <p class="banner__subtitle">{{ slides[currentSlide].subtitle }}</p>
          <button class="banner__cta">{{ slides[currentSlide].cta }} →</button>
        </div>
      </div>

      <!-- Navegação -->
      <button class="banner__arrow banner__arrow--left" @click="prev">‹</button>
      <button class="banner__arrow banner__arrow--right" @click="next">›</button>
    </div>

    <!-- Dots -->
    <div class="banner__dots">
      <button
        v-for="(slide, i) in slides"
        :key="slide.id"
        class="banner__dot"
        :class="{ 'banner__dot--active': i === currentSlide }"
        @click="goTo(i)"
      />
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  margin-bottom: 32px;
}

.banner__slide {
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: background 0.5s ease;
}

.banner__content {
  display: flex;
  align-items: center;
  gap: 32px;
  max-width: 1200px;
  width: 100%;
  padding: 0 80px;
}

.banner__emoji {
  font-size: 6rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.banner__text {
  color: white;
}

.banner__title {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.banner__subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 20px;
}

.banner__cta {
  padding: 12px 28px;
  background: white;
  color: #2c3e50;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.banner__cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.banner__arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner__arrow:hover {
  background: rgba(255, 255, 255, 0.35);
}
.banner__arrow--left {
  left: 16px;
}
.banner__arrow--right {
  right: 16px;
}

.banner__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 12px 0;
  background: #f5f5f5;
}

.banner__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #ccc;
  cursor: pointer;
  transition:
    background 0.2s,
    transform 0.2s;
}

.banner__dot--active {
  background: #2c3e50;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .banner__slide {
    height: 200px;
  }
  .banner__title {
    font-size: 1.4rem;
  }
  .banner__emoji {
    font-size: 4rem;
  }
  .banner__content {
    padding: 0 48px;
    gap: 16px;
  }
}
</style>
