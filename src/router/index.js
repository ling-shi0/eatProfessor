import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '../pages/indexPage'
import login from '../pages/login'
import register from '../pages/register'
import todayEat from '../pages/todayEat'
import healthyMessage from '../pages/healthyMessage'
import Vant from 'vant'
import 'vant/lib/index.css'
import xiangKe from "../pages/xiangKe"
import selfMessage from "../pages/selfMessage"

Vue.use(Vant)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name:'register',
      component:register
    },
    {
      path: '/indexPage',
      name:'indexPage',
      component:indexPage,
      children: [{
        path: 'todayEat',
        name:'todayEat',
        component:todayEat
      }, {
        path: 'healthyMessage',
        name:'healthyMessage',
        component: healthyMessage
      },{
        path: 'xiangKe',
        name:'xiangKe',
        component:xiangKe
      }, {
        path: 'selfMessage',
        name:'selfMessage',
        component: selfMessage
      }]
    }
  ]
})
