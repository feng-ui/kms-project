import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/css/global.css'
import Antd from 'ant-design-vue/es'
import 'ant-design-vue/dist/antd.css'
import echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'
import './views/mock/userMock.js'
import './views/mock/loginMock.js'
import './views/mock/roleMock.js'
import './views/system/modal/user/uEdit.vue'
import VueCookies from 'vue-cookies'
import 'jquery'
import './views/utils/mixins.js'

Vue.use(Antd)
Vue.use(echarts)
Vue.use(VueCookies)
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.$notification = Antd

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
