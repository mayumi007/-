import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/components/Login')
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/welcome',
    component: () => import('@/components/Home'),
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/components/welcome')
      },
      {
        path: '/shoplist',
        name: 'shopList',
        component: () => import('@/components/shop/shopList')
      },
      {
        path: '/goodslist',
        name: 'goShopList',
        component: () => import('@/components/shop/goShopList')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
