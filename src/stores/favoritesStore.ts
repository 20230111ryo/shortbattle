import { defineStore } from 'pinia'
import type { Product } from '@/types/Product' // "type" を使ってインポートしないとタイプスクリプトは動かないらしい

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: [] as Product[] // お気に入りの商品リストをProduct型の配列として初期化
  }),
  actions: {
    addToFavorites(product: Product) {
      // 既にお気に入りにあるかチェック
      // product_idを使用して比較
      const isFavorite = this.favorites.some((fav) => fav.product_id === product.product_id)
      if (!isFavorite) {
        this.favorites.push(product) // お気に入りにない場合は追加
      }
    },
    removeFromFavorites(productId: string) {
      // product_idを使用してお気に入りから削除
      this.favorites = this.favorites.filter((fav) => fav.product_id !== productId)
    },
    isFavorite(productId: string): boolean {
      // product_idがお気に入りに含まれているか確認
      return this.favorites.some((fav) => fav.product_id === productId)
    }
  }
})
