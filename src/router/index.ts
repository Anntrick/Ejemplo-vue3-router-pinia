import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/RmListView.vue')
    },
    { path: '/detail/:id', 
      name: 'detail',
      component: () => import('../views/RmDetailView.vue')
    },

  ]
})

export default router
