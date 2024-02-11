import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Cart from '@/views/Cart.vue'
import Payment from '@/views/Payment.vue'

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
    }
  ]
})

export default router
