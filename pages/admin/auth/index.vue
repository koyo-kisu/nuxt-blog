<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form>
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

<script>
export default {
  name: 'AdminAuthPage',
  layout: 'admin',

  data() {
    return {
      isLogin: true
    }
  },
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
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>