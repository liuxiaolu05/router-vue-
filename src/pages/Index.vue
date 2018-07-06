<template>
    <div class="full-height">
        <div class="layout">
            <Layout>
                <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu theme="dark" width="auto" :class="menuitemClasses">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            <span @click="goFirstPageOne">Foo page</span>
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="search"></Icon>
                            <span @click="goFirstPageTwo">Bar page</span>
                        </MenuItem>
                        <MenuItem name="3" >
                            <Icon type="settings"></Icon>
                            <span @click="goFirstPageThree">Other page</span>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header :style="{padding: 0}" class="layout-header-bar">
                        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}"
                              type="navicon-round" size="24"></Icon>
                    </Header>
                    <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                        <div class="top-style" @click="backIndex"><strong>今天天儿不错，希望大促不要改需求！(*￣︶￣)</strong></div>
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </div>

    </div>

</template>

<script>
    import "@/assets/css/style"
    import Vue from "vue"

    var store = function () {
        return new Vuex.Store({
            state: {
                path: 'main'

            },
            getters: {}
        })
    }();
    export default {
        data: function () {
            return {
                isCollapsed: false,
                num: '0'
            }
        },
        computed: {
            rotateIcon() {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses() {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            goFirstPageOne() {
                this.$router.push({
                    path: '/Foo'
                });
                this.$store.state.path = 'main';
            },
            goFirstPageTwo() {
                this.$router.push({
                    path: '/Bar'
                });
                this.$store.state.path = 'main';
            },
            goFirstPageThree(){
                this.$router.push({
                    path: '/Other'
                });
                this.$store.state.path = 'main';
            },
            collapsedSider() {
                this.$refs.side1.toggleCollapse();
            },
            backIndex(){
                this.$router.push({
                    path: '/'
                });
                this.$store.state.path = 'main';
                /*待改进*/
                $('.ivu-menu-dark li').removeClass('ivu-menu-item-active ivu-menu-item-selected')
            }
        },
        mounted() {
            window.vm = this;
            this.$router.push({
                path: '/'
            });
        },
        store: store
    }
</script>

