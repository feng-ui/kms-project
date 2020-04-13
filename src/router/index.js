import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import menu from '../components/menu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: menu
  }
]

const router = new VueRouter({
  routes
})

export default router
