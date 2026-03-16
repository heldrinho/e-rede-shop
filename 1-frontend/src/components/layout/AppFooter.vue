<!-- 1-frontend/src/components/layout/AppFooter.vue -->
<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__brand">
        <h3>🛒 E-Rede Shop</h3>
        <p>Moda e estilo para todos.</p>
      </div>

      <div class="footer__links">
        <h4>Categorias</h4>
        <a href="#">Roupas</a>
        <a href="#">Calçados</a>
        <a href="#">Acessórios</a>
        <a href="#">Bolsas</a>
      </div>

      <div class="footer__links">
        <h4>Atendimento</h4>
        <a href="#">Fale Conosco</a>
        <a href="#">Trocas e Devoluções</a>
        <a href="#">Rastrear Pedido</a>
      </div>

      <div class="footer__contact">
        <h4>Contato</h4>
        <p>📧 contato@eredeshop.com</p>
        <p>📞 (85) 99999-9999</p>
        <p>📍 Fortaleza, CE</p>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© 2026 E-Rede Shop. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  margin-top: 64px;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
}

.footer__brand h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
}

.footer__brand p {
  opacity: 0.7;
  font-size: 0.9rem;
}

.footer__links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__links h4,
.footer__contact h4 {
  font-size: 1rem;
  margin-bottom: 4px;
  opacity: 0.9;
}

.footer__links a {
  color: white;
  text-decoration: none;
  opacity: 0.65;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}

.footer__links a:hover {
  opacity: 1;
}

.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__contact p {
  opacity: 0.7;
  font-size: 0.9rem;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 16px 24px;
  font-size: 0.85rem;
  opacity: 0.6;
}
</style>
