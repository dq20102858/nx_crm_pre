import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layout/Layout'
Vue.use(Router)

const constantRouterMap = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/authredirect',
    component: () => import('@/views/login/authredirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401'),
    hidden: true
  }
]
export { constantRouterMap }

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

//路由组件注册
export const asyncRouterMap = {

  '/views/layout/Layout': () => import('@/views/layout/Layout'),
  //蜂巢办
  '/views/fchaob/dashboard/index': () => import('@/views/fchaob/dashboard'),
  '/views/fchaob/product/index': () => import('@/views/fchaob/product/index'),
  '/views/fchaob/product/detail': () => import('@/views/fchaob/product/detail'),
  '/views/fchaob/product/designsys': () => import('@/views/fchaob/product/designsys'),
  '/views/fchaob/product/spaces': () => import('@/views/fchaob/product/spaces'),
  '/views/fchaob/product/productCate': () => import('@/views/fchaob/product/productCate'),


}
