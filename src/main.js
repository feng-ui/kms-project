import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/css/global.css'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import echarts from 'echarts'
import axios from 'axios'

Vue.use(Antd)
Vue.use(echarts)
Vue.prototype.$ajax = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
