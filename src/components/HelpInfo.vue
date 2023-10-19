<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar />
  <main id="main">
    <div class="container mt-4">
      <h1>Suporte</h1>

      <div class="container mt-3">
        <div class="alert alert-info" role="alert">
          <strong>Dica:</strong> Para trocar suas informações siga para aba de
          configurações.
        </div>

        <div class="alert alert-success" role="alert">
          <strong>GitHub:</strong> Confira o código fonte no GitHub.
        </div>
      </div>

      <br />

      <div class="accordion" id="faqAccordion">
        <div class="accordion-item custom-bg">
          <h2 class="accordion-header" id="faqHeading1">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqCollapse1"
              aria-expanded="true"
              aria-controls="faqCollapse1"
            >
              Como usar?
            </button>
          </h2>
          <div
            id="faqCollapse1"
            class="accordion-collapse collapse show"
            aria-labelledby="faqHeading1"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              Só utilizar a aba de Monte o seu Burguer e depois gerenciar na aba Gerenciar Pedidos.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="faqHeading2">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faqCollapse2"
              aria-expanded="false"
              aria-controls="faqCollapse2"
            >
              Como faço para entrar em contato com o suporte?
            </button>
          </h2>
          <div
            id="faqCollapse2"
            class="accordion-collapse collapse"
            aria-labelledby="faqHeading2"
            data-bs-parent="#faqAccordion"
          >
            <div class="accordion-body">
              Você pode entrar em contato com nosso suporte através de (82)
              99944-2490.
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
:root {
  scroll-behavior: smooth;
}

body {
  font-family: "Open Sans", sans-serif;
  background: #f6f9ff;
  color: #444444;
}

a {
  color: #ff771d;
  text-decoration: none;
}

a:hover {
  color: #e86107;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Nunito", sans-serif;
}

/*--------------------------------------------------------------
# Main
--------------------------------------------------------------*/
#main {
  margin-top: 60px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

@media (min-width: 1200px) {
  #main,
  #footer {
    margin-left: 300px;
  }
}

@media (max-width: 1199px) {
  .toggle-sidebar .sidebar {
    left: 0;
  }
}

@media (min-width: 1200px) {
  .toggle-sidebar #main,
  .toggle-sidebar #footer {
    margin-left: 0;
  }
}

.alert {
  margin-left: -12px;
  background: #ff771d;
  border: none;
  color: #fff;
}

#faqCollapse1{
    background: #ff771d;
    color: #fff;
}

#faqCollapse2{
    background: #ff771d;
    color: #fff;
}
</style>