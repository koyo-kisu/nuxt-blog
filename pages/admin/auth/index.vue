<template>
  <div class="admin-auth-page">
    <div v-if="!isWaiting">
      <p>読み込み中</p>
    </div>
    <div v-else class="sns-login-container">
      <div class="sns-btns">SNSログイン</div>
      <div class="image-container">
        <img class="google-image" src="~/assets/images/btn_google_signin_light_normal_web@2x.png" alt="Googleでログイン" v-on:click="googleLogin">
      </div>
    </div>
  </div>
</template>


<!--
<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email">メールアドレス</AppControlInput>
        <AppControlInput type="password">パスワード</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'ログイン' : '新規登録' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">切り替え {{ isLogin ? '新規登録' : 'ログイン' }}</AppButton>
      </form>
    </div>
  </div>
</template>
-->

<script>
import axios from 'axios';
import firebase from '@/plugins/firebase';

export default {
  name: 'AdminAuthPage',
  layout: 'admin',

  data() {
    return {
      isLogin: true,
      isWaiting: true,
    }
  },

  methods: {
    googleLogin: function() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          window.alert(error)
        })
    }
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 500px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}

.sns-login-container {
  padding: 20px;
}

.image-container {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.sns-btns {
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
}

.google-image {
  width: 170px;
  height: 40px;
}

img .avater{
  width: 70%;
  cursor: pointer;
}
</style>