<script setup>
import Navbar from "@/components/Navbar.vue";
import { ref, onMounted } from "vue";
import Message from "./Message.vue";

const logo_src = "/img/logo.png";
const logo_name = "FastBurguer";

const burguers = ref(null);
const burguer_id = ref(null);
const status = ref([]);
const msg = ref(null);

const getPedidos = async () => {
  const req = await fetch("http://localhost:3000/burguers");
  const data = await req.json();
  burguers.value = data;

  // Resgatar os status
  getStatus();
};

const getStatus = async () => {
  const req = await fetch("http://localhost:3000/status");
  const data = await req.json();
  status.value = data;
};

const deleteBurguer = async (id) => {
  const req = await fetch(`http://localhost:3000/burguers/${id}`, {
    method: "DELETE",
  });

  const res = req.json();

  // Mensagem
  msg.value = `O pedido de Nº ${id} foi removido com sucesso`;

  // Limpar a mensagem
  setTimeout(() => (msg.value = ""), 2000);

  getPedidos();
};

const updateBurguer = async (event, id) => {
  // Acessa os valores do objeto do evento
  const option = event.target.value;

  // A propriedade status é substituída pelos valores da variável option e transformada em JSON em formato de String
  const dataJson = JSON.stringify({ status: option });

  // Faz a requisição ao servidor pelo id
  const req = await fetch(`http://localhost:3000/burguers/${id}`, {
    // Método PATCH para atualizar apenas os campos desejados
    method: "PATCH",
    // Informa que está se comunicando com um JSON
    headers: { "Content-Type": "application/json" },
    // Enviando os dados
    body: dataJson,
  });

  const res = await req.json();

  msg.value = `O pedido de Nº ${id} foi atualizado para ${res.status}`;

  setTimeout(() => (msg.value = ""), 2000);
};

onMounted(() => {
  getPedidos();
});
</script>

<template>
  <Navbar :logo="logo_src" :alt="logo_name" />
  <main id="main">
    <!-- Recent Sales -->
    <div class="col-12">
      <div class="card recent-sales overflow-auto">
        <Message class="message-dashboard" :msg="msg" v-show="msg" />
        <div class="filter">
          <a class="icon" href="#" data-bs-toggle="dropdown"
            ><i
              style="color: #ff771d; margin: 20px"
              class="bi bi-three-dots"
            ></i
          ></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li class="dropdown-header text-start">
              <h6>Filtro</h6>
            </li>

            <li><a class="dropdown-item" href="#">Hoje</a></li>
            <li><a class="dropdown-item" href="#">Esse mês</a></li>
            <li><a class="dropdown-item" href="#">Esse ano</a></li>
          </ul>
        </div>

        <div class="card-body">
          <h5 class="card-title">Pedidos <span>| Hoje</span></h5>

          <table class="table table-borderless datatable">
            <thead>
              <tr>
                <th scope="col">Nº</th>
                <th scope="col">Cliente:</th>
                <th scope="col">Burguer</th>
                <th scope="col">Opcionais:</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody v-for="burguer in burguers" :key="burguer.id">
              <tr>
                <th scope="row">
                  <a href="#">{{ burguer.id }}</a>
                </th>
                <td>{{ burguer.nome }}</td>
                <td>
                  <a href="#" class="text-primary">{{ burguer.pao }}</a>
                </td>
                <td>
                  <ul>
                    <li
                      v-for="(opcional, index) in burguer.opcionais"
                      :key="index"
                    >
                      {{ opcional }}
                    </li>
                  </ul>
                </td>
                <div>
                  <select
                    name="status"
                    class="status"
                    @change="updateBurguer($event, burguer.id)"
                  >
                    <option value="">Status</option>
                    <option
                      v-for="s in status"
                      :key="s.id"
                      :value="s.tipo"
                      :selected="burguer.status == s.tipo"
                    >
                      {{ s.tipo }}
                    </option>
                  </select>
                  <button class="delete-btn" @click="deleteBurguer(burguer.id)">
                    Cancelar
                  </button>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- End Recent Sales -->
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

/* Card */
.card {
  margin-bottom: 30px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
}

.card-header,
.card-footer {
  border-color: #ebeef4;
  background-color: #fff;
  color: #798eb3;
  padding: 15px;
}

.card-title {
  padding: 20px 0 15px 0;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  font-family: "Poppins", sans-serif;
}

.card-title span {
  color: #899bbd;
  font-size: 14px;
  font-weight: 400;
}

.card-body {
  padding: 0 20px 20px 20px;
}

.card-img-overlay {
  background-color: rgba(255, 255, 255, 0.6);
}

/* Pedidos */
.dashboard .recent-sales {
  font-size: 14px;
}

select {
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 15px;
  padding: 5px;
  margin-right: 10px;
}

/* Estilo para quando o select estiver focado */
select:focus {
    border-color: #ff771d; /* Borda azul quando focado */
    box-shadow: 0 0 5px rgba(255, 175, 36, 0.755); /* Sombra quando focado */
}


.delete-btn{
  background: #bd0101;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 5px 20px;
  margin-left: 30px;
  transition: 0.5s;
}

.delete-btn:hover {
  background: red;
}

.dashboard .recent-sales .table thead {
  background: #f6f6fe;
}

.dashboard .recent-sales .table thead th {
  border: 0;
}

.dashboard .recent-sales .dataTable-top {
  padding: 0 0 10px 0;
}

.dashboard .recent-sales .dataTable-bottom {
  padding: 10px 0 0 0;
}

/* Top Selling */
.dashboard .top-selling {
  font-size: 14px;
}

.dashboard .top-selling .table thead {
  background: #f6f6fe;
}

.dashboard .top-selling .table thead th {
  border: 0;
}

.dashboard .top-selling .table tbody td ul li {
  vertical-align: middle;
}

.dashboard .top-selling img {
  border-radius: 5px;
  max-width: 60px;
}

.message-dashboard{
  background: #9e0000;
  margin-top: 10px;
  padding: 0px 5px;
  height: 55px;
  font-size: 18px;
}
</style>