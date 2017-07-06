import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/vuex/store'
// import AwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(AwesomeSwiper)

import Index from './component/index'
import notFound from './component/notFound'

require('@/scss/all.scss')
// require('assets/a.css')
// require('@/scss/all.scss')

Vue.use(VueRouter)

// Vue.config.productionTip = false
// Vue.use(meta)
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  // mode: 'history',
  // base: baseUrl,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/notFound',
      component: notFound
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router
})
