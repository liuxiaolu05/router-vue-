<template>
    <div>
        <div v-show="path=='main'">
            <div class="form-condition">
                <div>Hi,我是Foo主页面</div>
            </div>
            <Button @click="skip" type="primary">我要去子页面</Button>
        </div>

       <!-- <transition  name="fade" mode="out-in">
            <router-view v-show="path!='main'"></router-view>
        </transition>-->
        <transition  name="fade" mode="out-in"
                     v-on:before-enter="beforeEnter"
                     v-on:enter="enter"
                     v-bind:css="false"
        >
            <router-view v-show="path!='main'"></router-view>
        </transition>

    </div>
</template>
<script>
    import Vue from "vue";
    import enterRouter from '@/assets/js/enterRouter.js';

    export default {
        data: function () {
            return {
                node: '0',
                show: false
            }
        },
        extends: enterRouter,
        methods: {
            skip: function () {
                this.$store.state.path = 'sub';
                this.$router.push({
                    path: '/Foo/FooSon',
                    name: 'FooSon',
                    query: {
                        id: '12',
                    },
                     params: {
                       id: 2313,
                       name: 'test'
                     }
                });
                // console.log(this.$router);
                // console.log(this.$route);
            },
            beforeEnter: function (el) {
                // el.style.opacity = 0;
            },
            enter: function (el, done) {
                // el.style.opacity = 1;
                el.className = 'tada animated';
                done();
             /*
               Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300});
               Velocity(el, {fontSize: '1em'}, {complete: done})*/
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