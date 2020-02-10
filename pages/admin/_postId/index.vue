<template>
  <div class="admin_post_page">
      <section class="update_form">
          <!-- 'post'属性を子コンポーネント'AdminPostForm'に渡す -->
          <AdminPostForm :post="loadedPost" />
      </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
    components: {
        AdminPostForm,
    },

    data() {
        return {
            // プロパティを1つのオブジェクトとして扱うと簡単
            loadedPost: {
                author: 'Koyo',
                title: 'お気に入り記事',
                content: 'ぜひ読んでください！',
                thumbnail: "https://bz-cdn.shoeisha.jp/static/images/article/3449/3449-top.jpg"
            }
        }
    },
}
</script>

<style>

</style>