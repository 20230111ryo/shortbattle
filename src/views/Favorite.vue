<template>
  <div>
    <h1>お気に入り商品</h1>
    <div class="products">
      <!-- お気に入り商品リストを表示 -->
      <div v-for="product in favorites" :key="product.product_id" class="product">
        <img :src="product.image" :alt="product.product_name" />
        <h3>{{ product.product_name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
        <!-- お気に入りから削除するボタン -->
        <button @click="removeFromFavorites(product.product_id)">お気に入りから削除</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoritesStore } from '@/stores/favoritesStore'

export default {
  name: 'Favorites',
  computed: {
    favorites() {
      // favoritesStore からお気に入り商品リストを取得
      const favoritesStore = useFavoritesStore()
      return favoritesStore.favorites
    }
  },
  methods: {
    removeFromFavorites(productId) {
      // 商品をお気に入りから削除するメソッド
      const favoritesStore = useFavoritesStore()
      favoritesStore.removeFromFavorites(productId)
    }
  }
}
</script>

<style scoped></style>
