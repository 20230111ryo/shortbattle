import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Cart from '@/views/Cart.vue'
import Payment from '@/views/Payment.vue'
import Login from '@/views/Login.vue'
import Favorite from '@/views/Favorite.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Favorite',
      name: 'Favorite',
      component: Favorite
    }
  ]
})

export default router
