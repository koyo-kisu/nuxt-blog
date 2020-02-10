<template>
  <div class="admin_page">
      <section class="new_post">
        <!-- 'click'アクション後'new-post'へ遷移 -->
        <AppButton @click="$router.push('/admin/new-post')">投稿する</AppButton>
      </section>
      <section class="existing_posts">
        <button>過去の投稿</button>
        <PostList isAdmin />
      </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton,
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