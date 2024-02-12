<template>
  <div>
    <div class="products">
      <div v-for="product in limitedProducts" :key="product.id" class="product">
        <img :src="product.image" :alt="product.product_name" />
        <h3>{{ product.product_name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <button @click="addToCart(product)">カートへ</button>
        <p v-if="addedMessage === product.id">追加されました</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios'
import { useCartStore } from '@/stores/cartStore'

export default {
  name: 'Home',
  components: {
    Header
  },
  data() {
    return {
      products: [],
      addedMessage: null
    }
  },
  computed: {
    limitedProducts() {
      return this.products.slice(0, 5)
    }
  },
  methods: {
    addToCart(product) {
      const cart = useCartStore()
      cart.addToCart(product)
      this.addedMessage = product.id
      setTimeout(() => {
        this.addedMessage = null
      }, 1000)
    }
  },
  async mounted() {
    try {
      const response = await axios.get(
        'https://script.google.com/macros/s/AKfycbx3_yRnBtesy2zY0FzYBfRQkY5B2WG-JzaZDK4rIHwwUMkcOm3Lh4SlpQoOZVQ0JQek/exec'
      )
      this.products = response.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped></style>
