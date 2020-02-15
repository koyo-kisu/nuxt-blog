import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        // 値を保持
        state: {
            loadedPosts: []
        },

        // 'state'を利用した処理を実行
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editPost.id
                );
                state.loadedPosts[postIndex] = editPost
            }
        },

        // 'mutations'を'commit'で実行する
        actions: {
            nuxtServerinit(vuexContext, context) {
                // asyncData(): コンポーネントへデータをセットすることを目的
                // →　返された値はコンポーネントのテンプレートからアクセス可能
                // fetch(): ページがレンダリングされる前に、データをストアに入れるために使われる
                // 共に第一引数に'context'を受け取る
                // 必ず'Promise()'を返す
                // 'Promise()'が解決されるまで待つ
                return axios.get('https://nuxt-blog-20200215.firebaseio.com/posts.json')
                    .then(res => {
                        const postArray = []
                        for (const key in res.data) {
                            // スプレッド構文：　配列やオブジェクトの要素を文字通り展開する
                            postArray.push( { ...res.data[key], id: key } )
                        }
                        vuexContext.commit('setPosts', postArray)
                    })
                    .catch(e => context.error(e));
            },

            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },

            addPost(vuexContext, post) {
                const createPost = {
                    ...post, 
                    updatedDate: new Date()
                };
                axios
                .post('https://nuxt-blog0215.firebaseio.com/posts.json', createPost)
                .then(res => {
                    vuexContext.commit('addPost', {...createPost, id: res.data.name})
                    this.$router.push('/admin');
                })
                .catch(e => console.log(e));
            },

            editPost(vuexContext, editedPost) {

            }
        },

        // 'state'の状態を調べる
        // 第1引数に'state'を持つ
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        },
    })
}

export default createStore