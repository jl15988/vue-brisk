import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/app',
        meta: {
            title: 'app'
        },
        children: [
            {
                path: 'table',
                component: () => import('../views/test/data/Table'),
                meta: {
                    title: '表格'
                }
            }
        ]
    },
    {
        path: '/home',
        meta: {
            title: '首页'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// 解决跳转同一路由报错问题
let originPush = VueRouter.prototype.push;  // 备份原push方法
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        // 如果传了回调函数，直接使用
        originPush.call(this, location, resolve, reject);
    } else {
        // 如果没有传回调函数，手动添加
        originPush.call(this, location, () => {}, () => {});
    }
}

export default router
