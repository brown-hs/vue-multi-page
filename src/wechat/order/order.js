import Vue from 'vue'
import VueRouter from 'vue-router'
import Order from './component/order'
import store from '@/vuex/store'

Vue.use(VueRouter)

require('@/scss/all.scss')

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Order
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router
})
