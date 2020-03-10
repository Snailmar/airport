/*
 * @Author: vigorzhang
 * @Date: 2020-03-09 16:41:18
 * @LastEditors: Riddick
 * @LastEditTime: 2020-03-10 09:54:12
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[{
      path:'',
      name:'shop',
      component:Shop
    }]
  },
  // {
  //   path: '/sider',
  //   name: 'sider',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Sider.vue')
  // }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
