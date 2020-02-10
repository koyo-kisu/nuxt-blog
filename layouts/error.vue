<template>
  <div class="error-page">
    <h1>エラーが発生しました。</h1>
    <!-- エラー発生時にはnuxtは機能しないので単に'a'タグにする -->
    <p><a href="/">クリックするとホーム画面に戻ります。</a></p>
  </div>
</template>

<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>