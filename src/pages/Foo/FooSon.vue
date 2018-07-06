<template>
    <div>我是Foo子页面</div>
</template>
<script>

    export default {
        data: function () {
            return {}
        },
        methods: {},
        mounted: function () {
            this.$store.state.path = 'sub';
            console.log("params = " + JSON.stringify(this.$route.params));
            console.log("query = " + JSON.stringify(this.$route.query));
        }
    };
</script>