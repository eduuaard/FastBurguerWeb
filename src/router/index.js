import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Burguer from '../views/Burguer.vue'
import Pedidos from '../views/Pedidos.vue'
import ConfigurationDash from '../views/Configuration.vue'
import HelpInfo from '../views/Help.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/burguer',
    name: 'Burguer',
    component: Burguer
  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    component: Pedidos
  },
  {
    path: '/configuracoes',
    name: 'ConfigurationDash',
    component: ConfigurationDash
  },
  {
    path: '/ajuda',
    name: 'HelpInfo',
    component: HelpInfo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
