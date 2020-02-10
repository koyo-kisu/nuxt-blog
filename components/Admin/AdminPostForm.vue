<template>
    <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author">著者名</AppControlInput>
        <AppControlInput v-model="editedPost.title">タイトル</AppControlInput>
        <AppControlInput v-model="editedPost.thumbnail">サムネイル</AppControlInput>
        <AppControlInput
            control-type="textarea"
            v-model="editedPost.content">記事</AppControlInput>
        <AppButton type="submit">送信</AppButton>
        <AppButton
            type="button"
            style="margin-left: 10px"
            btn-style="cancel"
            @click="onCancel">取り消し</AppButton>
    </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'

export default {
    components: {
        AppControlInput,
        AppButton,
    },

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
                    content: ''
                }
        }
    },

    methods: {
        onCancel: function() {
            // キャンセルなら元のページへ戻る
            this.$router.push('/admin');
        },
        onSave: function() {
            // 保存されたかコンソール上で確認
            console.log(this.editedPost);
        }
    }
}
</script>

<style>

</style>