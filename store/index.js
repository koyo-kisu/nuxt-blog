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
            nuxtServerinit(vuexContext, context) {
            // asyncData(): コンポーネントへデータをセットすることを目的
            // →　返された値はコンポーネントのテンプレートからアクセス可能
            // fetch(): ページがレンダリングされる前に、データをストアに入れるために使われる
            // 共に第一引数に'context'を受け取る
            // 必ず'Promise()'を返す
                    // 'Promise()'が解決されるまで待つ
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
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
                        ])
                        resolve();
                    }, 1000);
                });
            },
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