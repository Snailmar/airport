/*
 * @Author: vigorzhang
 * @Date: 2020-03-09 16:41:18
 * @LastEditors: Riddick
 * @LastEditTime: 2020-04-02 14:14:35
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  children: [{
    path: '',
    name: 'shop',
    component: Shop
  },
  {
    path: '/video',
    name: 'video',
    component: () => import( /* webpackChunkName: "about" */ '../views/Video.vue')

  },
  {
    path: '/food',
    name: 'food',
    component: () => import( /* webpackChunkName: "about" */ '../views/Food.vue')

  },
  {
    path: '/parking',
    name: 'parking',
    component: () => import( /* webpackChunkName: "about" */ '../views/Parking.vue')

  },
  {
    path: '/transport',
    name: 'transport',
    component: () => import( /* webpackChunkName: "about" */ '../views/Transport.vue')

  },
  {
    path: '/vip',
    name: 'vip',
    component: () => import( /* webpackChunkName: "about" */ '../views/Vip.vue')
  }
  ]
}
,
  {
    path: '/demo',
    name: 'demo',
    component: () => import( /* webpackChunkName: "about" */ '../views/Demo.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router