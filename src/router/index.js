import Vue from 'vue';
import Router from '@@node_modules/vue-router';

// 路由懒加载
const Foo = () => import('@/pages/Foo/Foo');
const FooSon = () => import('@/pages/Foo/FooSon');
const Bar = () => import('@/pages/Bar/Bar');
const BarSon = () => import('@/pages/Bar/BarSon');
const Other = () => import('@/pages/Other/Other');
const OtherSon = () => import('@/pages/Other/OtherSon');

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/Foo'
            /*
            * redirect: to => {
                        // 方法接收 目标路由 作为参数
                        // return 重定向的 字符串路径/路径对象
                       处理逻辑
                    }
            * */
        },
        {
            path: '/Foo',
            name: 'Foo',
            component: Foo,
            meta: {title: 'Foo'},
            children: [
                {
                    path: '/Foo/FooSon',
                    name: 'FooSon',
                    component: FooSon,
                    meta: {title: 'FooSon'},
                }
            ]
        },
        {
            path: '/Bar',
            name: 'Bar',
            component: Bar,
            meta: {title: 'Bar'},
            children: [
                {
                    path: '/Bar/BarSon',
                    name: 'BarSon',
                    meta: {title: 'BarSon'},
                    component: BarSon
                }
            ]
        },
        {
            path: '/Other',
            name: 'Other',
            component: Other,
            meta: {title: 'other'},
            children: [
                {
                    path: '/Other/OtherSon',
                    component: OtherSon,
                    meta: {title: 'alias'},
                    alias: '/alias/alias'
                }
            ]
        }
    ]
});
/*全局钩子，在进入路由之前，每一次都会执行的方法*/
router.beforeEach((to, from, next) => {
    let params =  to.path.split('/').length > 2 ? "sub" : "main";
    localStorage.setItem('page',params);
    document.title = to.meta.title;
    next();
});


export default router;