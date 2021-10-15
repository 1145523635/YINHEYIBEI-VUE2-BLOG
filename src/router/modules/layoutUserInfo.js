/*
 * @Descripttion: 所有含用户信息的路由
 * @Author: 银河以北
 * @Date: 2021-08-11 15:47:00
 * @LastEditors: 银河以北
 * @LastEditTime: 2021-10-14 22:30:03
 */

//引入用户信息模块
import UserInfo from '@/layout/userInfo'
export const layoutUserInfo = [{
        path: 'home',
        name: 'Home',
        meta: {
            title: '时光笔记',
            keepAlive: true
        },
        components: {
            default: () =>
                import ('@/views/home/index.vue'),
            userInfo: UserInfo
        }
    }, {
        path: 'resources',
        name: 'Resources',
        meta: {
            title: '编程资源',
            keepAlive: true
        },
        components: {
            default: () =>
                import ('@/views/resources/index.vue'),
            userInfo: UserInfo
        }
    },
    {
        path: 'blogAbout',
        name: 'BlogAbout',
        meta: {
            title: '奇思妙想',
            keepAlive: true
        },
        components: {
            default: () =>
                import ('@/views/blogAbout/index.vue'),
            userInfo: UserInfo
        }
    },
    {
        path: 'release',
        name: 'Release',
        meta: {
            title: '发布文章',
            keepAlive: true
        },
        components: {
            default: () =>
                import ('@/views/release/index.vue'),
            userInfo: UserInfo
        }
    },
    {
        path: 'readArticle',
        name: 'ReadArticle',
        meta: {
            title: '文章阅读',
            keepAlive: false
        },
        components: {
            default: () =>
                import ('@/views/readArticle/index.vue'),
            userInfo: UserInfo
        }
    },
    {
        path: 'materialRecommend',
        name: 'MaterialRecommend',
        meta: {
            title: '资源推荐',
            keepAlive: false
        },
        components: {
            default: () =>
                import ('@/views/material/materialRecommend/index.vue'),
            userInfo: UserInfo
        }
    },
    {
        path: 'materialResult',
        name: 'MaterialResult',
        meta: {
            title: '推荐结果',
            keepAlive: false
        },
        components: {
            default: () =>
                import ('@/views/material/materialResult/index.vue'),
            userInfo: UserInfo
        }
    },
    {
        path: 'materialDetails',
        name: 'MaterialDetails',
        meta: {
            title: '资源详情',
            keepAlive: false
        },
        components: {
            default: () =>
                import ('@/views/material/materialDetails/index.vue'),
            userInfo: UserInfo
        }
    }
]