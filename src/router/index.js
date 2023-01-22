import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClavierView from '../views/ClavierView.vue'
import ContactView from '../views/ContactView.vue'
import HistoriqueView from '../views/HistoriqueView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Clavier',
    name: 'Clavier',
    component: ClavierView
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/Historique',
    name: 'Historique',
    component: HistoriqueView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
