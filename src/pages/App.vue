<template>
    <div id="app">
        <div class="layout">
            <Layout>
                <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                    <Menu ref="side_menu" :active-name="active" theme="dark" width="auto"
                          :class="menuitemClasses">
                        <MenuItem name="0">
                            <div class="high-name" @click="goFirstPageOne">
                                <Icon type="ios-navigate"></Icon>
                                <span>Foo page</span>
                            </div>
                        </MenuItem>
                        <MenuItem name="1">
                            <div class="high-name" @click="goFirstPageTwo">
                                <Icon type="search"></Icon>
                                <span>Bar page</span>
                            </div>
                        </MenuItem>
                        <MenuItem name="2">
                            <div class="high-name" @click="goFirstPageThree">
                                <Icon type="settings"></Icon>
                                <span>Other page</span>
                            </div>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header :style="{padding: 0}" class="layout-header-bar">
                        <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}"
                              type="navicon-round" size="24"></Icon>
                    </Header>
                    <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                        <transition :name="transitionName">
                            <router-view @enter="enter"></router-view>
                        </transition>
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
        name: 'app',
        data: function () {
            return {
                isCollapsed: false,
                transitionName: 'slide-right',
                active: -1

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
            goFirstPageThree() {
                this.$router.replace({
                    path: '/Other'
                });
                this.$store.state.path = 'main';
            },
            collapsedSider() {
                this.$refs.side1.toggleCollapse();
            },
            enter(node) {
                this.active = node;
                this.$nextTick(function () {
                    this.$refs.side_menu.updateOpened();
                    this.$refs.side_menu.updateActiveName();
                });
            },
        },
        watch: {
            '$route'(to, from) {
                //to： 目的地
                //from:
                // 源头
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
            }
        },
        mounted() {
            window.vm = this;
        },
        store: store
    }
</script>