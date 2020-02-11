import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        // 値を保持
        state: {
            LoadedPosts: []
        },

        // 'state'を利用した処理を実行
        mutations: {
            setPosts(state, posts) {
                state.LoadedPost = posts
            }
        },

        // 'mutations'を'commit'で実行する
        actions: {
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },

        // 'state'の状態を調べる
        // 第1引数に'state'を持つ
        getters: {
            LoadedPosts(state) {
                return state.LoadedPosts
            }
        },
    })
}

export default createStore