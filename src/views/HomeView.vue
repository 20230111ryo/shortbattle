<template>
  <div>
    <div class="products">
      <div v-for="product in limitedProducts" :key="product.product_id" class="product">
        <img :src="product.image" :alt="product.product_name" />
        <h3>{{ product.product_name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <!-- すべてのユーザーに対してお気に入りへ追加ボタンを表示 -->
        <button @click="addToFavorites(product)">お気に入りへ追加</button>
        <p v-if="favoriteAddedMessage === product.product_id">お気に入りへ追加されました</p>
        <!-- すべてのユーザーに対してカートへボタンを表示 -->
        <button @click="addToCart(product)">カートへ</button>
        <p v-if="addedMessage === product.product_id">カートへ追加されました</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useCartStore } from '@/stores/cartStore'
import { useFavoritesStore } from '@/stores/favoritesStore'

export default {
  name: 'Home',
  components: {
    // components...
  },
  data() {
    return {
      products: [],
      addedMessage: null,
      favoriteAddedMessage: null
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
      this.addedMessage = product.product_id // product.idからproduct.product_idへ修正
      setTimeout(() => {
        this.addedMessage = null
      }, 1000)
    },
    addToFavorites(product) {
      const favoritesStore = useFavoritesStore()
      favoritesStore.addToFavorites(product)
      this.favoriteAddedMessage = product.product_id // product.idからproduct.product_idへ修正
      setTimeout(() => {
        this.favoriteAddedMessage = null
      }, 1000)
    }
  },
  async mounted() {
    try {
      const productsResponse = await axios.get(
        'https://script.google.com/macros/s/AKfycbx3_yRnBtesy2zY0FzYBfRQkY5B2WG-JzaZDK4rIHwwUMkcOm3Lh4SlpQoOZVQ0JQek/exec'
      )
      this.products = productsResponse.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>
