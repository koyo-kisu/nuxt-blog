<template>
  <div class="home_page">
    <section class="intro">
      <h1>最新のテクノロジー記事</h1>
    </section>
    <!-- 子コンポーネントに'loadedPosts'を渡す -->
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList,
  },

  // asyncData(): コンポーネントへデータをセットすることを目的
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
          {
            id: "1",
            title: '最初の投稿',
            previewText: '最初の投稿',
            isAdmin: true,
            thumbnail: 'https://bz-cdn.shoeisha.jp/static/images/article/3449/3449-top.jpg',
          },
          {
            id: "2",
            title: '最初の投稿',
            previewText: '最初の投稿',
            isAdmin: true,
            thumbnail: 'https://bz-cdn.shoeisha.jp/static/images/article/3449/3449-top.jpg',
          },
          {
            id: "3",
            title: '最初の投稿',
            previewText: '最初の投稿',
            isAdmin: true,
            thumbnail: 'https://bz-cdn.shoeisha.jp/static/images/article/3449/3449-top.jpg',
          }
        ]
      })
    }, 1500)
  },

  // data() {
  //   return {
  //     loadedPosts: []
  //   }
  // },

  created() {
    setTimeout(() => {
      this.loadedPosts = [
        {
          id: "1",
          title: '最初の投稿',
          previewText: '最初の投稿',
          thumbnail: 'https://bz-cdn.shoeisha.jp/static/images/article/3449/3449-top.jpg',
        },
        {
          id: "2",
          title: '最初の投稿',
          previewText: '最初の投稿',
          thumbnail: 'https://bz-cdn.shoeisha.jp/static/images/article/3449/3449-top.jpg',
        },
        {
          id: "3",
          title: '最初の投稿',
          previewText: '最初の投稿',
          thumbnail: 'https://bz-cdn.shoeisha.jp/static/images/article/3449/3449-top.jpg',
        }
      ]
    }, 1500);
  },
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/images/IMG_8424.jpg');
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
