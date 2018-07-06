<template>
    <div id="village" class="village">
        <div v-show="path=='main'">
            <div class="form-condition">
                <div>我是Bar主页面</div>
            </div>
            <Button @click="skip" type="primary">我要去子页面</Button>
        </div>
        <router-view v-show="path!='main'"></router-view>
    </div>
</template>
<script>
    import enterRouter from '@/assets/js/enterRouter.js';

    export default {
        data: function () {
            return {
                node: '1'
            }
        },
        extends: enterRouter,
        methods: {
            skip: function () {
                this.$store.state.path = 'sub';
                this.$router.push({
                    path: '/Bar/BarSon',
                    query: {
                        id: '12',
                    }
                });
            }
        },
        computed: {
            path: function () {
                return this.$store.state.path
            }
        },
        mounted: function () {
        }
    }
</script>