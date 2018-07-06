<template>
    <div>我是Bar子页面</div>
</template>
<script>

    export default {
        data: function () {
            return {}
        },
        methods: {},
        mounted: function () {
            this.$store.state.path = 'sub';
        }
    };
</script>