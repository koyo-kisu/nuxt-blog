<template>
  <div class="admin_new_post_page">
      <section class="new_post_form">
          <AdminPostForm />
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
}
</script>

<style scoped>
.new_post_form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .new_post_form {
        width: 500px;
    }
}
</style>