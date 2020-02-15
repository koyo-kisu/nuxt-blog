<template>
  <div class="posts-page">
      <!-- 子コンポーネントに'loadedPosts'を渡す -->
      <PostList :item-posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList';

export default {
    // admin用レイアウト使用宣言
    // layout: 'admin',
    components: {
        PostList,
    },

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