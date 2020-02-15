<template>
  <div>
      <div class="single_post_page">
          <section class="post">
              <h1 class="post_title">{{ loadedPost.title }}</h1>
              <div class="post_details">
                  <div class="post_detail">{{ loadedPost.updatedDate }}</div>
                  <div class="post_detail">著者 {{ loadedPost.author }}</div>
              </div>
              <p class="post_content">{{ loadedPost.content }}</p>
          </section>
          <section class="post_feedback">
              <p>Let me know what you think about the post, send an email to <a href="mailto:koyokisu@gmail.com">koyokisu@gmail.com</a>.</p>
          </section>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'admin',
    // 'asyncData()'内では'this'は使用できないため'context.route.params.id'として外部からの情報を取得
    asyncData(context) {
        return axios.get('https://nuxt-blog0215.firebaseio.com/posts/' + context.params.id + '.json' )
            .then(res => {
                return {
                    loadedPost: res.data
                }
            })
            .catch(e => context.error(e))
    }

};
</script>

<style scoped>
.single_post_page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
}

.post {
    width: 100%;
}

@media (min-width: 768px) {
    .post {
        width: 600px;
        margin: auto;
    }
}

.post_title {
    margin: 0;
}

.post_details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 768px) {
    .post_details {
        flex-direction: row;
    }
}

.post_details {
    color: rgb(88, 88, 88);
    margin: 0 10px;
}

.post_feedback a {
    color: red;
    text-decoration: none;
}

.post_feedback a:hover,
.post_feedback a:active {
    color: salmon;
}
</style>