<template>
  <div class="admin_post_page">
      <section class="update_form">
          <!-- 'post'属性を子コンポーネント'AdminPostForm'に渡す -->
          <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
      </section>
  </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'
import axios from 'axios'

export default {
    layout: 'admin',
    components: {
        AdminPostForm,
    },

    asyncData(context) {
        return axios
            .get(
                "https://nuxt-blog0215.firebaseio.com/posts/" +
                context.params.postId +
                ".json"
            )
            .then(res => {
                return {
                    loadedPost: { ...res.data, id: context.params.postId }
                };
            })
            .catch(e => context.error());
    },

    methods: {
        onSubmitted(editedPost) {
            this.$store.dispatch('editPost', editedPost)
            .then(() => {
                this.$router.push('/admin');
            });
        }
    }
}
</script>

<style scoped>
.update_form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update_form {
    width: 500px;
  }
}
</style>