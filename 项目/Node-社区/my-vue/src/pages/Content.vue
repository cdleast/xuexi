<template>
    <div class="admin-content">
        <h2 v-text="article.title"></h2>
        <p>作者：{{article.author.loginname}} 发表于：{{article.create_at}}</p>
        <hr>
        <article v-html="article.content"></article>
        <h3>网友回复：</h3>
        <ul>
            <li v-for="i in article.replies">
                <p>评论者：{{i.author.loginname}} 评论于：{{i.create_at}}</p>
                <article v-html="i.content"></article>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Content",
    data() {
        return {
            id: this.$route.params.id,
            article: {
                author: {
                    loginname: ""
                }
            }
        };
    },
    created() {
        this.getData();
    },
    mounted() {
        $(".admin-content").css(
            "height",
            document.documentElement.clientHeight - 36 - 50 + "px"
        );
    },
    methods: {
        getData() {
            this.$api.get("topic/" + this.id, null, r => {
                console.log(r.data);
                this.article = r.data;
            });
        }
    }
};
</script>