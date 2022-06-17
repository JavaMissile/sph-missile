//此处配置路由

import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件

Vue.use(VueRouter);

//配置路由

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Search from '@/pages/Search'
import Register from '@/pages/Register'

let originpush = VueRouter.prototype.push
let orginreplace = VueRouter.prototype.replace
// console.log(originpush)
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (onComplete && onAbort) {
        originpush.call(this, location, onComplete, onAbort)
    } else {
        originpush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (onComplete && onAbort) {
        orginreplace.call(this, location, onComplete, onAbort)
    } else {
        orginreplace.call(this, location, () => { }, () => { })
    }
}
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path: "/login",
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: "/search/:keyword?",
            component: Search,
            name: "search",
            meta: {
                show: true
            }
        },
        {
            path: "/register",
            component: Register,
            meta: {
                show: false
            }
        },
        {
            path: "*",
            redirect: "/home"
        }
    ]
})