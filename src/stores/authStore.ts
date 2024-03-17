import { defineStore } from 'pinia'
import axios from 'axios'

// ログインユーザーの型定義
interface User {
  user_id: string
  name: string
  email: string
  password: string
  number: string
  created_at: string
  updated_at: string
  is_deleted: number
  deleted_at: string | null
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    currentUser: null as User | null, // 現在のログインユーザー
    isLoggedIn: false, // ログインフラグ
    errorMessage: ''
  }),
  actions: {
    // ログイン処理
    setUser(user: User) {
      this.currentUser = user
      this.isLoggedIn = true
    },
    async login(userCredentials: { user_id: string; password: string }) {
      try {
        // ここでユーザーの認証を行うAPIにリクエストを送信し、成功したらログインユーザーをセットする
        const response = await axios.post(
          'https://script.google.com/macros/s/AKfycbz2zkG4bJNQZ5SNak9vQ0I-nVvhXLmcNVUrBb51sIfZ7M3kM2GAstIGLv8AIXUPMvhzSw/exec',
          userCredentials
        )
        // ログイン成功時の処理
        if (response.data.success) {
          this.currentUser = response.data.user
          this.isLoggedIn = true
          this.errorMessage = ''
          console.log('ログイン成功')
        } else {
          this.errorMessage = response.data.message // エラーメッセージをセット
          console.error('ログイン失敗:', this.errorMessage)
        }
      } catch (error) {
        this.errorMessage = 'ログインエラーが発生しました' // エラーメッセージをセット
        console.error('ログインエラー:', error)
      }
    },
    // ログアウト処理
    logout() {
      this.currentUser = null // ログインユーザーをクリア
      this.isLoggedIn = false // ログインフラグをfalseに設定
    }
  }
})
