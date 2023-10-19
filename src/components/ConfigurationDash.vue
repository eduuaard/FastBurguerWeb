<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, onMounted } from "vue";

const nome = ref("Jhonathan Almeida");
const email = ref("jhonathanalmeida@gmail.com");
const telefone = ref("(82) 99944-2490");

</script>

<template>
  <Navbar />
  <main id="main">
    <div class="container mt-5">
      <div class="row">
        <!-- Div para substituir a foto -->
        <div class="col-md-4">
          <div class="text-center">
            <img
              src="/img/profile-img.jpg"
              alt="Sua Foto"
              class="img-fluid rounded-circle"
            />
          </div>
          <div class="mt-3">
            <button class="btn btn-primary">Trocar Foto</button>
          </div>
        </div>

        <!-- Formulário de configurações -->
        <div class="col-md-8">
          <h1 class="mb-4">Meu perfil</h1>

          <form>
            <div class="mb-3">
              <label for="nome" class="form-label">Nome:</label>
              <input
                type="text"
                class="form-control"
                id="nome"
                v-model="nome"
                placeholder="Seu Nome"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="seuemail@exemplo.com"
              />
            </div>
            <div class="mb-3">
              <label for="Telefone" class="form-label">Senha:</label>
              <input
                type="text"
                class="form-control"
                id="telefone"
                v-model="telefone"
                placeholder="********"
              />
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="notificacoes"
              />
              <label class="form-check-label" for="notificacoes"
                >Receber notificações</label
              >
            </div>

            <button type="submit" class="btn-salvar btn btn-primary mt-3">
              Salvar
            </button>
          </form>
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

img{
    margin-left: -60%;
}

h1 {
  font-size: 25px;
  font-weight: bold;
}

button {
  background: #ff771d;
  border: none;
  width: 37%;
  transition: 0.5s;
}

button:hover {
  background: #e86107;
}
</style>