import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import menu from '../components/menu.vue'
import echarts from '../components/echarts/echarts.vue'
import lineAndBar from '../components/echarts/lineAndBar.vue'
import chartPie from '../components/echarts/chartPie.vue'
import chartLineChange from '../components/echarts/dynamicData.vue'
import temperatureChange from '../components/echarts/temperatureChange.vue'
import use from '../views/system/user.vue'
import role from '../views/system/role.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      title: 'login',
      needLogin: true
    }
  },
  {
    path: '/',
    component: menu,
    name: 'menu',
    meta: {
      title: '首页',
      type: 'login'
    },
    children: [{
      path: '/user',
      component: use
    }, {
      path: '/role',
      component: role
    },
      {
        path: '/echarts',
        component: echarts
      },
      {
        path: '/lineAndBar',
        component: lineAndBar
      },
      {
        path: '/chartPie',
        component: chartPie
      }
    ]
  },

  {
    path: '/lineChange',
    component: chartLineChange
  },
  {
    path: '/temperatureChange',
    component: temperatureChange
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
