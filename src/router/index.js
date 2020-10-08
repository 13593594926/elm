import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail.vue')
  },
  
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      // 首页
      {
      path: 'msite',
      name: 'msite',
      component: () => import('../views/msite.vue')
      },
      // 搜索
      {
      path: 'search',
      name: 'search',
      component: () => import('../views/search.vue')
      },
      // 订单
      {
      path: 'order',
      name: 'order',
      component: () => import('../views/order.vue')
      },
      // 我的
      {
      path: 'profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
      },
    ],
  },
]

const router = new VueRouter({
  routes
})

export default router