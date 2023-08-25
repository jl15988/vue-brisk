import Vue from 'vue'
import VueRouter from 'vue-router'
import BkMainContainer from "../components/BkMainContainer";

Vue.use(VueRouter)

const routes = [
    {
        path: '/layout',
        meta: {
            title: '布局'
        },
        component: BkMainContainer,
        children: [
            {
                path: 'container',
                component: () => import('../views/layout/Container'),
                meta: {
                    title: '全局容器'
                }
            },
            {
                path: 'header',
                component: () => import('../views/layout/Header'),
                meta: {
                    title: '标头'
                }
            },
            {
                path: 'headerLogo',
                component: () => import('../views/layout/HeaderLogo'),
                meta: {
                    title: '标头logo'
                }
            }
        ]
    },
    {
        path: '/data',
        meta: {
            title: '数据'
        },
        component: BkMainContainer,
        children: [
            {
                path: 'bk-table',
                component: () => import('../views/data/Table'),
                meta: {
                    title: '轻表格'
                }
            }
        ]
    },
    {
        path: '/form',
        meta: {
            title: '表单'
        },
        component: BkMainContainer,
        children: [
            {
                path: 'bk-form',
                component: () => import('../views/form/Form'),
                meta: {
                    title: '轻表单'
                }
            }
        ]
    },
    {
        path: '/navigation',
        meta: {
            title: '导航'
        },
        component: BkMainContainer,
        children: [
            {
                path: 'bk-menu',
                component: () => import('../views/navigation/Menu'),
                meta: {
                    title: '菜单'
                }
            },
            {
                path: 'bk-breadcrumb',
                component: () => import('../views/navigation/Breadcrumb'),
                meta: {
                    title: '菜单'
                }
            }
        ]
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
        originPush.call(this, location, () => {
        }, () => {
        });
    }
}

export default router
