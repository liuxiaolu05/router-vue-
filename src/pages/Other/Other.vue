<template>
    <div>
        <div v-show="path=='main'">
            <div>Hi,我是other主页面</div>
            <Button @click="skip" type="primary">我要去Foo页面</Button>
            <Button @click="goAlias" type="primary">我要去otherSon页面</Button>
        </div>
        <router-view v-show="path!='main'"></router-view>
    </div>
</template>
<script>
    import enterRouter from '@/assets/js/enterRouter.js';

    export default {
        data: function () {
            return {
                node: '2'
            }
        },
        methods: {
            skip: function () {
                this.$store.state.path = 'main';
                this.$router.push({
                    path: '/Foo'
                });

            },
            goAlias: function () {
                this.$store.state.path = 'sub';
                this.$router.push({
                    path: '/alias/alias'
                });
            }
        },
        extends: enterRouter,
        computed: {
            path: function () {
                return this.$store.state.path
            }
        },
        mounted: function () {
        }
    }
</script>