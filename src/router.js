import Vue from 'vue'
import Router from 'vue-router'

import ClientInfo from './views/ClientInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ClientInfo',
      component: ClientInfo
    }
  ]
})
