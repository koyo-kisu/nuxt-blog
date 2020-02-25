<template>
  <div class="admin_page">
      <section class="new_post">
        <!-- 'click'アクション後'new-post'へ遷移 -->
        <AppButton @click="$router.push('/admin/new-post')">投稿する</AppButton>
        <AppButton @click="$router.push('/')">ホームに戻る</AppButton>
      </section>
      <section class="existing_posts">
        <h1>過去の投稿</h1>
        <PostList 
          isAdmin
          :posts="loadedPosts" />
      </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',

  middleware: 'auth',

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>
.admin_page {
  padding: 20px;
}

.new_post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing_posts {
  text-align: center;
}
</style>