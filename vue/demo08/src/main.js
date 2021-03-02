// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from 'axios'
// 将axios 注册到实例中
Vue.prototype.$http = axios;//this.ax.get("url")
// 引入store目录中的index
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // 注册状态管理
  store,
})
