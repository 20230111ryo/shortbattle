<template>
  <div>
    <h2>購入画面</h2>

    <!-- 支払い方法の選択 -->
    <select v-model="paymentMethod">
      <option value="credit">クレジットカード決済</option>
      <option value="cod">代引き決済</option>
    </select>

    <div v-if="paymentMethod === 'credit'">
      <input type="text" placeholder="氏名" v-model="name" />
      <input type="text" placeholder="住所" v-model="address" />
      <input type="text" placeholder="クレジットカード番号" v-model="creditCardNumber" />
    </div>

    <!-- 代引き決済の入力フォーム -->
    <div v-else>
      <input type="text" placeholder="氏名" v-model="name" />
      <input type="text" placeholder="住所" v-model="address" />
    </div>

    <!-- 購入決定ボタン -->
    <button @click="showConfirmation = true">購入決定</button>

    <!-- 確認ポップアップ -->
    <div v-if="showConfirmation" class="confirmation-popup">
      <p>確定してよろしいですか？</p>
      <button @click="confirmPurchase">はい</button>
      <button @click="showConfirmation = false">いいえ</button>
    </div>

    <!-- 購入完了メッセージ -->
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
      showConfirmation: false, // 確認ポップアップの表示状態
      showThankYouMessage: false // 購入完了メッセージの表示状態
    }
  },
  methods: {
    confirmPurchase() {
      // 購入処理をここに記述
      this.showThankYouMessage = true
      setTimeout(() => {
        this.showThankYouMessage = false
        this.$router.push('/') // 3秒後にホーム画面に戻る
      }, 3000)
      this.showConfirmation = false // 確認ポップアップを閉じる

      // カートストアを取得
      const cart = useCartStore()

      // カート情報をクリア
      cart.clearCart()

      // 購入完了メッセージを表示し、ホーム画面にリダイレクト
      this.showThankYouMessage = true
      setTimeout(() => {
        this.showThankYouMessage = false
        this.$router.push('/') // 3秒後にホーム画面に戻る
      }, 3000)
      this.showConfirmation = false // 確認ポップアップを閉じる
    }
  }
}
</script>

<style scoped></style>
