import Vue from 'vue'
import Router from 'vue-router'
import main from '../views/main.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  // base:"/webapp",
  routes: [
    {
      path: '/',
      component: main,
    }
  ]
})
