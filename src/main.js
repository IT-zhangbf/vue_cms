import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

//定义全局变量
import http from '@/util/ajax'
Vue.prototype.$http=http;

//全局配置
import config from '@/config'
Vue.prototype.config=config;


import 'assets/styles/reset.css'
import 'assets/styles/border.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
