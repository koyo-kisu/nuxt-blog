import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
    return new Vuex.Store({
        // 値を保持
        state: {
            loadedPosts: []
        },

        // 'state'を利用した処理を実行
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost
            }
        },

        // 'mutations'を'commit'で実行する
        actions: {
            nuxtServerInit(vuexContext, context) {
                // asyncData(): コンポーネントへデータをセットすることを目的
                // →　返された値はコンポーネントのテンプレートからアクセス可能
                // fetch(): ページがレンダリングされる前に、データをストアに入れるために使われる
                // 共に第一引数に'context'を受け取る
                // 必ず'Promise()'を返す
                // 'Promise()'が解決されるまで待つ
                return axios.get( process.env.baseUrl + '/posts.json')
                    .then(res => {
                        const postsArray = [];
                        for (const key in res.data) {
                            // スプレッド構文：　配列やオブジェクトの要素を文字通り展開する
                            postsArray.push( { ...res.data[key], id: key } );
                        }
                        vuexContext.commit('setPosts', postsArray);
                    })
                    .catch(e => context.error(e));
            },

            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            },

            addPost(vuexContext, post) {
                const createdPost = {
                    ...post, 
                    updatedDate: new Date()
                };
                return axios
                .post( process.env.baseUrl + '/posts.json', createdPost)
                .then(res => {
                    // 'mutations'の'addPost'を実行
                    vuexContext.commit('addPost', { ...createdPost, id: res.data.name })
                })
                .catch(e => console.log(e));
            },

            editPost(vuexContext, editedPost) {
              return axios.put( process.env.baseUrl + '/posts/' + 
                editedPost.id +
                '.json', editedPost
              )
              .then(res => {
                vuexContext.commit('editPost', editedPost)
              })
              .catch(e => console.log(e))
            },
          },

        // 'state'の状態を調べる
        // 第1引数に'state'を持つ
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
            isAuthenticated(state) {
                return state.token != null
            }
        },
    });
};

export default createStore;