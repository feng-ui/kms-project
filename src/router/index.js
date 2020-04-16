import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import menu from '../components/menu.vue'
import echarts from '../components/echarts.vue'
import lineAndBar from '../components/lineAndBar.vue'
import chartPie from '../components/chartPie.vue'
import chartLineChange from '../components/echarts/dynamicData.vue'
import temperatureChange from '../components/echarts/temperatureChange.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: menu
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
    path: '/lineChange',
    component: chartLineChange
  },
  {
    path: '/temperatureChange',
    component: temperatureChange
  }
]
const router = new VueRouter({
  routes
})

export default router
