import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                keepAlive: false,
                //此组件需要被缓存
            },
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue'),
            // 因为是单页面应用在此路由设置title后其他没有设置则保持最后一个title
            meta: { title: 'About' }
        },
        {
            path: '/info',
            name: 'info',
            component: () =>
                import ( /* webpackChunkName: "info" */ './views/Info.vue'),
            meta: {
                requireAuth: true,
                // 添加该字段，表示进入这个路由是需要登录的
                keepAlive: true,
                //此组件需要被缓存
            },
        },
        {
            path: '/my',
            name: 'my',
            component: () =>
                import ( /* webpackChunkName: "my" */ './views/My.vue'),
            // 进入路由之前执行的函数
            beforeEnter: (to, from, next) => {
                console.log("进来了")
                next();
            },
            // 离开路由之前执行的函数(失败)
            beforeLeave: (to, from, next) => {
                console.log("离开了")
            },
        },
        {
            path: '/Other/UI',
            name: 'ui',
            // props: true,
            // props: { text: '路由Router' },
            component: () =>
                import ('./views/Other/UI.vue'),
        },
        {
            path: '/list',
            name: 'list',
            component: () =>
                import ('./components/List.vue'),
        },
        {
            path: '/qr',
            name: 'qr',
            component: () =>
                import ('./components/QRcode.vue'),
        },
        {
            path: '/magic',
            name: 'magic',
            component: () =>
                import ('./components/Magic.vue'),
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () =>
                import ('./components/Calendar.vue'),
        },
        {
            path: '/mobileCalendar',
            name: 'mobileCalendar',
            component: () =>
                import ('./components/MobileCalendar.vue'),
        },
    ],
});