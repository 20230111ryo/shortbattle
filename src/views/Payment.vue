<template>
  <div>
    <h2>購入画面</h2>
    <select v-model="paymentMethod">
      <option value="credit">クレジットカード決済</option>
      <option value="cod">代引き決済</option>
    </select>

    <div v-if="paymentMethod === 'credit'">
      <input type="text" placeholder="氏名" v-model="name" />
      <input type="text" placeholder="住所" v-model="address" />
      <input type="text" placeholder="クレジットカード番号" v-model="creditCardNumber" />
    </div>
    <div v-else>
      <input type="text" placeholder="氏名" v-model="name" />
      <input type="text" placeholder="住所" v-model="address" />
    </div>
    <button @click="showConfirmation = true">購入決定</button>
    <div v-if="showConfirmation" class="confirmation-popup">
      <p>確定してよろしいですか？</p>
      <button @click="confirmPurchase">はい</button>
      <button @click="showConfirmation = false">いいえ</button>
    </div>
    <div v-if="showThankYouMessage" class="popup">購入ありがとうございます。</div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'

export default {
  data() {
    return {
      paymentMethod: 'credit',
      name: '',
      address: '',
      creditCardNumber: '',
      showConfirmation: false,
      showThankYouMessage: false
    }
  },
  methods: {
    confirmPurchase() {
      this.showThankYouMessage = true
      setTimeout(() => {
        this.showThankYouMessage = false
        this.$router.push('/')
      }, 3000)
      this.showConfirmation = false
      const cart = useCartStore()
      cart.clearCart()
      this.showThankYouMessage = true
      setTimeout(() => {
        this.showThankYouMessage = false
        this.$router.push('/')
      }, 3000)
      this.showConfirmation = false
    }
  }
}
</script>

<style scoped></style>
