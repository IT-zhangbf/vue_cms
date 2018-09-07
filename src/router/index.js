import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_vue')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: _import('login/Login'),
            hidden: true
        },
        {
            path: '/404',
            name: '404',
            component: _import('common/404'),
            hidden: true
        },
        {
            path: '/',
            name: 'Home',
            component: _import('layout/Layout'),
            children: [
                {
                    path: '',
                    component:_import('home/Home'),
                },
                {
                    path: 'order',
                    component:_import('order/OrderList'),
                },
                {
                    path: 'banner',
                    component:_import('banner/Banner'),
                },
                {
                    path: 'product',
                    component:_import('product/ProductList'),
                },
                {
                    path: 'user',
                    component:_import('user/UserList'),
                }
            ]
        },
        {
            path: '*',
            name: '404',
            component: _import('common/404')
        }
    ],
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})
