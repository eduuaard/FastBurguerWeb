<script setup>
import Navbar from "@/components/Navbar.vue";
import Message from "./Message.vue";
import { ref, onMounted } from 'vue';

const paes = ref(null);
const opcionaisdata = ref(null);
const nome = ref(null);
const pao = ref(null);
const carne = ref(null);
const opcionais = ref([]);
const msg = ref(null);

const getIngredientes = async () => {
    const req = await fetch("http://localhost:3000/ingredientes");
    const data = await req.json();
    paes.value = data.paes;
    opcionaisdata.value = data.opcionais;
};

const criouBurguer = async (e) => {
    e.preventDefault();
    
    const data = {
        nome: nome.value,
        pao: pao.value,
        opcionais: Array.from(opcionais.value),
        status: "Solicitado"
    };
 
    const dataJson = JSON.stringify(data);

    const req = await fetch("http://localhost:3000/burguers",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: dataJson,
    });

    const res = await req.json();

    //Mensagem de sucesso do sistema
     msg.value = `Pedido Nº ${res.id} realizado com sucesso`;

     setTimeout(() => msg.value = "", 2000)

     nome.value = "";
     pao.value = "";
     opcionais.value = "";
     
     setTimeout(() => location.reload(), 3000)
};

onMounted(() => {
  getIngredientes();
});


</script>

<template>
  <Navbar />
  <main id="main">
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="form-container col-md-6">
          <div>
            <Message :msg="msg" v-show="msg" />
          </div>
          <h2 class="mb-4">Monte o hamburguer</h2>
          <form id="formulario" @submit="criouBurguer">
            <div class="mb-3">
              <label for="nome" class="form-label">Nome do cliente:</label>
              <input
                type="text"
                class="form-control"
                id="nome"
                placeholder="Digite o nome"
                v-model="nome"
                required
              />
            </div>
            <div class="mb-3">
              <label for="hamburguer" class="form-label"
                >Escolha seu hamburguer</label
              >
              <br />
              <select name="pao" v-model="pao" id="pao">
                <option value="">Selecione seu hamburguer</option>
                <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
                  {{ pao.tipo }}
                </option>
              </select>
            </div>
            <div id="opcionais-container" class="input-container mb-3">
              <label id="opcionais-title" for="opcionais" class="form-label"
                >Selecione os opcionais:</label
              >
              <div
                class="checkbox-container"
                v-for="opcional in opcionaisdata"
                :key="opcional.id"
              >
                <input
                  type="checkbox"
                  name="opcionais"
                  v-model="opcionais"
                  :value="opcional.tipo"
                />
                <span>{{ opcional.tipo }}</span>
              </div>
            </div>
            <button type="submit" class="btn-form btn btn-primary">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped>
@import "@/assets/css-dashboard/bootstrap-icons/bootstrap-icons.css";

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

.form-container {
  margin-bottom: 30px;
  margin-top: -45px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
  padding: 50px 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

#opcionais-container  {
  flex-direction: row;
  flex-wrap: wrap;
}

#opcionais-title {
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.checkbox-container span {
  margin-left: 6px;
  margin-top: -5px;
  font-weight: bold;
}


.checkbox-container span {
  margin-left: 6px;
  margin-top: -5px;
  font-weight: bold;
}

.btn-form {
  width: 100%;
  background: #ff771d;
  border: none;
  transition: 0.5s;
}

.btn-form:hover {
  background: #e86107;
}

label {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #ff771d;
}

input,
select {
  padding: 5px 10px;
  width: 100%;
}
</style>