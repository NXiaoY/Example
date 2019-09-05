import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import My from '@/pages/my/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
  // 每次进到页面的时候，始终位于最顶部
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
