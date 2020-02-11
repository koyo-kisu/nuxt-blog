<template>
  <div class="posts-page">
      <PostList />
      <PostList />
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
    // admin用レイアウト使用宣言
    layout: 'admin',
    components: {
        PostList,
    },

    // asyncData(): コンポーネントへデータをセットすることを目的
    // コンポーネントがロードされる前に呼び出され、第一引数に'context'を受け取る
    asyncData(context) {
        // 'Promise()'が解決されるまで待つ
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // 成功した場合
                resolve({
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
            }, 1500);
            // reject(new Error());
        })
        // 失敗した場合
        .then(data => {
            return data
        })
        .catch(e => {
            context.error(e);
        });
    },

    // コンポーネント生成時に'dispatch()'がトリガーとなって'actions'を実行
    created() {
        this.$store.dispatch('setPosts', this.loadedPosts)
        // console.log(this.$store.getters.loadedPosts)
    }
};
</script>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>