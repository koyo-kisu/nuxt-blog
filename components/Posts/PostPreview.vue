<template>
    <!-- postLinkの動きがいまいちわからない -->
    <nuxt-link :to="postLink" class="post_preview">
        <article>
            <div class="post_thumbnail" 
                :style="{ backgroundImage: 'url(' + thumbnail + ')' }"></div>
            <div class="post_content">
                <p>{{ title }}</p>
                <p>{{ previewText }}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',
    // 親から渡されたデータを'props'で受け取る
    props: {
        id: {
          type: String,
          required: true
        },
        isAdmin: {
          type: Boolean,
          required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    },

    computed: {
      postLink() {
        return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
      }
    }
}
</script>

<style scoped>
.post_preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  color: black;
  text-decoration: none;
}

@media (min-width: 850px) {
  .post_preview {
    width: 400px;
    margin: 10px;
  }
}

.post_thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post_content {
  padding: 10px;
  text-align: center;
}

a:hover .post_content,
a:active .post_content {
  background-color: #ccc;
}
</style>