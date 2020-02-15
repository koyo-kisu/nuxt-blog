<template>
    <section class="post-list">
        <!-- 2.受け取った'posts'をfor文で繰り返し取り出す -->
        <!-- 3.さらに子コンポーネントに渡す -->
        <PostPreview
            v-for="post in itemPosts"
            :key="post.id"
            :id="post.id"
            :is-admin="isAdmin"
            :title="post.title"
            :previewText="post.previewText"
            :thumbnail="post.thumbnail"
            />
    </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview';

export default {
    components: {
        PostPreview,
    },

    props: {
        // 1.親コンポーネントからのpostsを'props'で受け取る
        itemPosts: {
            // type: Array,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>