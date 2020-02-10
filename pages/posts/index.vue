<template>
  <div class="posts-page">
      <PostList />
      <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
    // admin用レイアウト使用宣言
    layout: 'admin',
    components: {
        PostList,
    }
}
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>