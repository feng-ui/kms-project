import Vue from 'vue'
import VueRouter from 'vue-router'
import menu from '../components/menu.vue'
import echarts from '../components/echarts/echarts.vue'
import lineAndBar from '../components/echarts/lineAndBar.vue'
import chartPie from '../components/echarts/chartPie.vue'
import chartLineChange from '../components/echarts/dynamicData.vue'
import temperatureChange from '../components/echarts/temperatureChange.vue'
import electricSum from '../components/echarts/electricSum.vue'
import use from '../views/system/user.vue'
import role from '../views/system/role.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {
    path: '/login',
    component: resolve => require(['../components/login.vue'], resolve)
  },
  {
    path: '/',
    component: menu,
    name: 'menu',
    meta: {
      title: '首页',
      type: 'menu',
      requireAuth: true
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
      },
      {
        path: '/dynamicData',
        component: chartLineChange
      },
      {
        path: '/temperatureChange',
        component: temperatureChange
      },
      {
        path: '/electricSum',
        component: electricSum
      }
    ]
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.localStorage.getItem('userInfo')
  if (!tokenStr) return next('/login')
  next()
})

export default router
