import { defineStore } from 'pinia'
import type { Product } from '@/types/Product' // "type" を使ってインポートしないとタイプスクリプトは動かないらしい

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [] as Product[]
  }),
  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    incrementItemQuantity(product: Product) {
      const item = this.items.find((item) => item.id === product.id)
      if (item) {
        item.quantity++
      }
    },
    decrementItemQuantity(product: Product) {
      const item = this.items.find((item) => item.id === product.id)
      if (item && item.quantity > 0) {
        item.quantity--
      } else {
        this.items = this.items.filter((item) => item.id !== product.id)
      }
    },
    removeItem(product: Product) {
      this.items = this.items.filter((item) => item.id !== product.id)
    }
  }
})
