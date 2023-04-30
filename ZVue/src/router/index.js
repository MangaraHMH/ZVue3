import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import AddView from '../views/AddView.vue'
import EditView from '../views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pasien/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/add',
      name: 'add',
      component: AddView
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: EditView
    }
  ]
})

export default router
