<template>
  <div>
    <h2>カート</h2>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <h3>{{ item.product_name }}</h3>
        <p>{{ item.price }}円</p>
        <button @click="decrementQuantity(item)" :disabled="item.quantity === 1">−</button>
        <span>{{ item.quantity }}</span>
        <button @click="incrementQuantity(item)">＋</button>
        <button @click="removeItem(item)">削除する</button>
      </div>
      <p>合計金額: {{ totalPrice }}円</p>
    </div>
    <div v-else>
      <p>カートリストがありません。</p>
    </div>
    <router-link to="/payment">
      <p>購入画面へ進む</p>
    </router-link>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'Cart',
  computed: {
    cartItems() {
      const cart = useCartStore()
      return cart.items
    },
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  methods: {
    incrementQuantity(item) {
      const cart = useCartStore()
      cart.incrementItemQuantity(item)
    },
    decrementQuantity(item) {
      const cart = useCartStore()
      if (item.quantity > 1) {
        cart.decrementItemQuantity(item)
      }
    },
    removeItem(item) {
      const cart = useCartStore()
      cart.removeItem(item)
    }
  }
}
</script>

<style scoped></style>
