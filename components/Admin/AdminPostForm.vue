<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">著者名</AppControlInput>
        <AppControlInput v-model="editedPost.title">タイトル</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail">サムネイル</AppControlInput>
        <AppControlInput
            control-type="textarea"
            v-model="editedPost.content"
            >記事</AppControlInput>
        <AppControlInput
            control-type="textarea"
            v-model="editedPost.previewText"
            >記事見出し</AppControlInput>
        <AppButton type="submit">送信</AppButton>
        <AppButton
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
            @click="onCancel">取り消し</AppButton>
    </form>
</template>

<script>
export default {
    // 親から渡ってきた'post'を'props'で受け取る
    props: {
        post: {
            type: Object,
            required: false,
        }
    },

    data() {
        return {
            // プロパティを1つのオブジェクトとして扱うと簡単
            editedPost: this.post 
                ? { ...this.post } 
                : {
                    author: '',
                    title: '',
                    thumbnail: '',
                    content: '',
                    previewText: ''
                }
        }
    },

    methods: {
        onCancel: function() {
            // キャンセルなら元のページへ戻る
            this.$router.push('/admin');
        },
        onSave: function() {
            // 子から親へ継承
            this.$emit('submit', this.editedPost)
        }
    }
}
</script>

<style>

</style>