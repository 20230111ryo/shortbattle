<template>
  <div>
    <h1>ログイン</h1>
    <form @submit.prevent="login">
      <label for="user_id">ID:</label>
      <input type="text" id="user_id" v-model="user_id" />
      <label for="password">パスワード:</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">ログイン</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </form>
    <div>
      <p>秋人さんへ</p>
      <p>ID:1</p>
      <p>password:root1</p>
      <p>で入れます</p>
      <p></p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      user_id: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async login() {
      // エラー解析用にログ出し
      console.log('送信するパラメータ:', {
        user_id: this.user_id,
        password: this.password
      })

      try {
        const response = await axios.get(
          'https://script.google.com/macros/s/AKfycbxbWo70037jn2zDpBxzF-fy96BvTfILF5GxP_5ueYNlAz3OkB-g1Toku4WR7CXFnZFlEA/exec',
          {
            params: {
              user_id: this.user_id.toString(), // 文字列
              password: this.password.toString() // 文字列
            }
          }
        )
        if (response.data.success) {
          // ログイン成功時は処理完了後にホーム画面へ遷移する
          console.log('ログイン成功')
          this.$router.push('/')
        } else {
          // ログイン失敗時はエラーメッセージ表示、自画面に留まる制御
          this.errorMessage = 'IDまたはパスワードが正しくありません'
          console.error('ログイン失敗:', this.errorMessage)
        }
      } catch (error) {
        this.errorMessage = 'ログインエラーが発生しました'
        console.error('ログインエラー:', error)
      }
    }
  }
}
</script>
