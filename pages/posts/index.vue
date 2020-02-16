<template>
  <div class="posts-page">
      <!-- 子コンポーネントに'loadedPosts'を渡す -->
      <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
    // admin用レイアウト使用宣言
    // layout: 'admin',
    computed: {
        loadedPosts() {
            return this.$store.getters.loadedPosts
        }
    },
};
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>